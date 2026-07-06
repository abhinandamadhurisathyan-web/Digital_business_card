import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light",

    secondary:
      "bg-surface-container text-primary hover:bg-primary hover:text-white",

    outline:
      "border border-primary text-primary bg-white hover:bg-primary hover:text-white",

    ghost:
      "bg-transparent text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-3 text-base",

    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      className={`
        rounded-xl
        font-medium
        transition-all
        duration-300
        flex
        items-center
        justify-center
        gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {leftIcon}

      {children}

      {rightIcon}
    </button>
  );
}