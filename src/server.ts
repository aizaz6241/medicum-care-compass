import "./lib/error-capture";

import defaultServerEntry from "@tanstack/react-start/server-entry";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const serverEntry = (defaultServerEntry?.default ?? defaultServerEntry) as ServerEntry;

// h3 swallows in-handler throws into a normal 500 Response with body
// {"error": true, "status": 500, "unhandled": true} or {"unhandled":true,"message":"HTTPError"}
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown; error?: unknown; status?: unknown };
    return payload.unhandled === true || payload.error === true || payload.status === 500;
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      if (!serverEntry || typeof serverEntry.fetch !== "function") {
        throw new Error("Invalid serverEntry: fetch method missing");
      }

      // Fix for Netlify Serverless environment where request.url might be relative or missing origin
      let req = request;
      if (req && req.url && !req.url.startsWith("http://") && !req.url.startsWith("https://")) {
        const origin = request.headers.get("host") ? `https://${request.headers.get("host")}` : "https://medicum-pflegedienst.de";
        const validUrl = new URL(req.url, origin).toString();
        req = new Request(validUrl, request);
      }

      const response = await serverEntry.fetch(req, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error("CATASTROPHIC SSR ERROR IN SERVER.TS:", error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
