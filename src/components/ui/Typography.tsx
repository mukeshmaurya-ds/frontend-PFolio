import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodyLarge"
  | "caption";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const variants = {
  display: "display-text",
  h1: "heading-1",
  h2: "heading-2",
  h3: "heading-3",
  body: "body",
  bodyLarge: "body-large",
  caption: "caption",
};

export default function Typography({
  children,
  variant = "body",
  className,
}: Props) {
  return (
    <div
      className={cn(
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}