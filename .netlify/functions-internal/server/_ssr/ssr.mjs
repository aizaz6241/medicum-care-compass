import "../_runtime.mjs";
import { a as server_default, i as getServerFnById, n as createServerEntry, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./ssr2.mjs";
const ssr_exports = { default: server_default };
//#region node_modules/.nitro/vite/services/ssr/assets/createMiddleware-B_4t7rW1.js
function createMiddleware(options, __opts) {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	const setValidator = (validator) => {
		return createMiddleware({}, Object.assign(resolvedOptions, {
			validator,
			inputValidator: validator
		}));
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		validator: setValidator,
		inputValidator: setValidator,
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
}
//#endregion
export { createMiddleware as a, createServerEntry, server_default as default, ssr_exports as i, TSS_SERVER_FUNCTION as n, getServerFnById as r, createServerFn as t };
