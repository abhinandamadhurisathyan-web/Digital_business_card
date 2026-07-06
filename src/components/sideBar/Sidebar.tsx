import { X } from "lucide-react";

import SidebarItem from "./SidebarItem";
import tarento_logo from "../../assets/tarento_logo.svg";
import { sidebarItems, logoutItem } from "./sideBarData";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          w-64
          bg-background
          border-r
          border-border
          flex
          flex-col
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:relative
          lg:translate-x-0
        `}
      >
        {/* Mobile Close Button */}

        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface-container transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Logo */}

        <div className="p-6">
          <img
            src={tarento_logo}
            alt="Tarento Logo"
            className="w-40"
          />
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-5 space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.title}
              item={item}
            />
          ))}
        </nav>

        {/* Logout */}

        <div className="border-t border-border p-5">
          <SidebarItem item={logoutItem} />
        </div>

        {/* Footer */}

        <div className="mt-auto px-5 py-4 text-xs text-text-secondary">
          © 2026 Tarento Technologies
        </div>
      </aside>
    </>
  );
}