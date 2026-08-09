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
  const { ref, visible } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={ref} data-visible={visible} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
