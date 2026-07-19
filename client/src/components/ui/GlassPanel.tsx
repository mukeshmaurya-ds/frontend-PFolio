import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassPanel({
  children,
  className,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}