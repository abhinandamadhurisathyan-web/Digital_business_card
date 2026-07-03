interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
      w-full
      bg-[#4D7B5C]
      hover:bg-[#40694e]
      text-white
      font-semibold
      py-3
      rounded-xl
      transition
      "
    >
      {text}
    </button>
  );
}