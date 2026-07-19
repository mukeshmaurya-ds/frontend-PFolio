import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

export default function Section({
  id,
  children,
  className,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}