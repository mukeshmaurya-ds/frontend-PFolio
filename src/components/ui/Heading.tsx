import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-extrabold tracking-tight md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}