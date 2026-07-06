import { LucideIcon } from "lucide-react";

interface QRActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function QRActionButton({
  icon: Icon,
  label,
  onClick,
  variant = "secondary",
}: QRActionButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-green-700 text-white hover:bg-green-800 border-green-700"
      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100";

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${styles}`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}