import type { ChangeEvent } from "react";

interface SelectFieldProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label,
  options,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="mb-5">

      <label className="block text-sm mb-2">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-button
          border
          border-border
          bg-surface
          px-4
          py-3
          outline-none
          focus:border-primary
        "
      >
        <option value="">
          Select
        </option>

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