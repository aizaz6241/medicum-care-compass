import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useReveal<HTMLElement>(delay);
  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      data-visible={visible}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}
