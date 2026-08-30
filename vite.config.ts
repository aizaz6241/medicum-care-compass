import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    ...(process.env.VERCEL
      ? { preset: "vercel" }
      : process.env.NETLIFY
        ? { preset: "netlify" }
        : {}),
  },
  tanstackStart: {
    // Use the built-in TanStack Start server entry (not our custom src/server.ts)
    // src/server.ts wraps a virtual module that only works in Vite context, not Netlify Lambda
  },
});
