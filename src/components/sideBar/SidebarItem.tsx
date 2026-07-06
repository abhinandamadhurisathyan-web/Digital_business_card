import { NavLink } from "react-router-dom";
import { type SidebarItemType } from "../../types/sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
}

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        transition
        ${
          isActive
            ? "bg-surface text-primary font-semibold"
            : "text-text-secondary hover:bg-surface"
        }
        `
      }
    >
      <Icon size={18} />

      <span>{item.title}</span>
    </NavLink>
  );
}