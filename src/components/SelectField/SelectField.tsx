import type { ChangeEvent } from "react";

interface SelectFieldProps {
  label: string;
  options: string[];
  value?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label,
  options,
  value,
  disabled = false,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="mb-5 min-w-0">
      <label className="block text-sm mb-2 text-gray-700">
        {label}
      </label>

      <select
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`
          w-full
          rounded-button
          border
          px-4
          py-3
          outline-none
          transition
          ${
            disabled
              ? "border-gray-200 bg-gray-50 text-gray-800 cursor-default"
              : "border-border bg-surface focus:border-primary"
          }
        `}
      >
        <option value="">Select</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}