import type { ReactNode, ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type = "text",
  placeholder = "",
  value,
  icon,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="flex items-center border rounded-xl px-4 py-3">
        {icon && (
          <span className="text-gray-400 mr-3">
            {icon}
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent"
        />
      </div>
    </div>
  );
}