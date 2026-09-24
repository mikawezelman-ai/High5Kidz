import { ButtonHTMLAttributes } from "react";

type Variant = "cta" | "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  cta: "bg-cta text-white hover:bg-cta/90",
  primary: "bg-primary text-white hover:bg-primary-dark",
  ghost: "bg-transparent text-primary hover:bg-mint-light",
};

export default function Button({
  variant = "cta",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-6 py-3 font-600 transition-colors disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
