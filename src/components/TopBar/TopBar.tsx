import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  employeeName: string;
  designation: string;
  profileImage: string;
  onMenuClick: () => void;
}

export default function TopBar({
  employeeName,
  designation,
  profileImage,
  onMenuClick,
}: TopBarProps) {
  const navigate = useNavigate();
  return (
    <header className="h-20 border-b border-border bg-surface flex items-center justify-between px-6">

      {/* Left Side */}

      <div className="flex items-center gap-4">

        {/* Hamburger - Only visible on mobile */}

        <button
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu size={24} />
        </button>



      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        <Bell size={20} className="text-primary" />
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3"

        >
        <div className="hidden sm:block text-right">
          <h3 className="font-semibold">{employeeName}</h3>
          <p className="text-xs text-text-secondary">
            {designation}
          </p>
        </div>

        <img
          src={profileImage}
          alt={employeeName}
          className="h-10 w-10 rounded-full object-cover"
        />
        </button>

      </div>

    </header>
  );
}