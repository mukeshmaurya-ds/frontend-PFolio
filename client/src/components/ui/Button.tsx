import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type Size =
  | "sm"
  | "md"
  | "lg";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> &
  BaseProps & {
    href?: never;
  };

type LinkButtonProps = BaseProps & {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

type Props = ButtonProps | LinkButtonProps;

const variantClasses = {
  primary:
    "bg-cyan-500 text-slate-950 hover:bg-cyan-400",

  secondary:
    "bg-indigo-600 text-white hover:bg-indigo-500",

  outline:
    "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950",

  ghost:
    "text-white hover:bg-white/10",

  danger:
    "bg-red-500 text-white hover:bg-red-600",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50";

export default function Button(props: Props) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    loading = false,
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading ? (
        <>
          <span
            className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </>
  );

  if ("href" in props) {
    const linkProps = props as LinkButtonProps;
    const { href, target, rel } = linkProps;

    const computedRel =
      target === "_blank"
        ? rel ?? "noopener noreferrer"
        : rel;

    return (
      <Link
        href={href}
        target={target}
        rel={computedRel}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props;

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      disabled={loading || buttonProps.disabled}
      aria-busy={loading}
      className={classes}
    >
      {content}
    </button>
  );
}