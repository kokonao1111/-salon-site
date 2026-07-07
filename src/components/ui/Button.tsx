import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const base =
  "group inline-flex items-center gap-3 px-7 py-3.5 text-sm tracking-[0.1em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: `${base} bg-ink text-soft-white hover:bg-forest`,
  "primary-light": `${base} bg-soft-white text-ink hover:bg-pearl`,
  outline: `${base} border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-soft-white`,
  "outline-light": `${base} border border-soft-white/50 text-soft-white hover:border-soft-white hover:bg-soft-white hover:text-ink`,
  gold: `${base} bg-gold text-soft-white hover:bg-forest`,
  ghost: `${base} px-0 py-0 text-ink hover:text-forest`,
};

interface CommonProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  showArrow?: boolean;
  className?: string;
}

type LinkButtonProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    external?: boolean;
  };

export function LinkButton({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  external,
  ...props
}: LinkButtonProps) {
  const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link className={`${variants[variant]} ${className}`} {...anchorProps} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
