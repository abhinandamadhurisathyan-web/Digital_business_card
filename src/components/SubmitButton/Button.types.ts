export interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "full";
}