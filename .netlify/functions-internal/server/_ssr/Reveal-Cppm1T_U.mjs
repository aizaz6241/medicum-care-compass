import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as cn } from "./router-D9WlpxzW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-Cppm1T_U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Sanftes Einblenden beim Scrollen.
* Respektiert prefers-reduced-motion (CSS blendet die Animation dort aus).
*/
function useReveal(delay = 0) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.setTimeout(() => setVisible(true), delay);
					observer.unobserve(entry.target);
				}
			});
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .1
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [delay]);
	return {
		ref,
		visible
	};
}
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	const { ref, visible } = useReveal(delay);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		className: cn("reveal", className),
		children
	});
}
//#endregion
export { Reveal as t };
