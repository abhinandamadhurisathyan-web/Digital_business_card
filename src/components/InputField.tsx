import type { ReactNode } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  icon: ReactNode;
}

export default function InputField({
  label,
  type = "text",
  placeholder,
  icon,
}: InputFieldProps) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="flex items-center border rounded-xl px-4 py-3">
        <span className="text-gray-400 mr-3">{icon}</span>

        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent"
        />
      </div>
    </div>
  );
}