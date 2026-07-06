import type { ProfileFieldProps } from "./Profile.types";

export default function ProfileField({
  label,
  value,
}: ProfileFieldProps) {
  return (
    <div className="flex flex-col">

      <span className="text-[11px] uppercase tracking-wider text-text-secondary font-medium">
        {label}
      </span>

      <p className="mt-2 border-b border-border pb-2 text-lg text-text">
        {value}
      </p>

    </div>
  );
}