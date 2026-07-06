
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

interface CreateQRCardProps {
  onClick?: () => void;
}

export default function CreateQRCard({
  
}: CreateQRCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/qr-code");
    }
  return (
    <button
      onClick={handleClick}
      className="
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        rounded-xl
        border-2
        border-dashed
        border-gray-300
        bg-white
        p-6
        transition-all
        duration-200
        hover:border-green-600
        hover:bg-green-50
        hover:shadow-md
      "
    >
      {/* Plus Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <Plus
          size={32}
          className="text-gray-500"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-base font-semibold text-gray-800">
        Generate New QR
      </h3>

      {/* Description */}
      <p className="mt-2 text-center text-sm leading-6 text-gray-500">
        Customize your QR card for a specific
        campaign or event.
      </p>
    </button>
  );
}