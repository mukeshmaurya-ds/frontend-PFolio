import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30",
        className
      )}
    >
      {children}
    </div>
  );
}