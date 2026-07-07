interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  size?: "small" | "medium" | "large"| "full";
  className?: string;
}

export default function Button({
  text,
  icon,
  variant = "primary",
  onClick,
  size = "medium",
  className = "",
}: ButtonProps) {
   const sizeStyles = {
    small: "w-24 px-4 py-2 text-sm h-10",
    medium: "w-40 px-6 py-3 text-base h-12",
    large: "w-50 px-8 py-4 text-lg h-14",
    full: "w-full px-6 py-3 text-base h-12",
  };
  return (
    <button
      onClick={onClick}
      className={`
  rounded-xl
  font-semibold
  transition
  flex
  items-center
  justify-center
  gap-2
  ${sizeStyles[size]}
  ${
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary"
  }
` + (className ? ` ${className}` : "")}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}