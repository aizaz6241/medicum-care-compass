import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sanfter 3D-Parallax-Effekt, der der Maus folgt.
 * Deaktiviert sich bei prefers-reduced-motion und auf Touch-Geräten.
 */
export function Parallax3D({
  children,
  className,
  strength = 10,
  depth = 18,
}: {
  children: ReactNode;
  className?: string;
  /** maximale Neigung in Grad */
  strength?: number;
  /** Verschiebung der inneren Ebene in Pixeln */
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let frame = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const render = () => {
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      el.style.setProperty("--px", cx.toFixed(4));
      el.style.setProperty("--py", cy.toFixed(4));
      el.style.transform = `perspective(1200px) rotateX(${(-cy * strength).toFixed(2)}deg) rotateY(${(cx * strength).toFixed(2)}deg)`;
      const inner = el.firstElementChild as HTMLElement | null;
      if (inner) {
        inner.style.transform = `translate3d(${(cx * depth).toFixed(2)}px, ${(cy * depth).toFixed(2)}px, 0)`;
      }
      frame = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
      ty = Math.max(-1, Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [strength, depth]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
