import type { ReactNode, ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type = "text",
  placeholder = "",
  value,
  icon,
  disabled = false,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-2">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div
        className={`flex items-center rounded-xl border px-4 py-3 transition ${
          disabled
            ? "bg-gray-50 border-gray-200"
            : "bg-white border-gray-300 focus-within:border-primary"
        }`}
      >
        {icon && (
          <span className="mr-3 text-gray-400">
            {icon}
          </span>
        )}

        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          className={`flex-1 bg-transparent outline-none ${
            disabled
              ? "cursor-default text-gray-800"
              : "text-gray-900"
          }`}
        />
      </div>
    </div>
  );
}