import { NavLink } from "react-router-dom";
import { type SidebarItemType } from "../../types/sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
  onClick?: () => void;
}

export default function SidebarItem({
  item,
  onClick,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
<NavLink
  to={item.path}
  onClick={onClick}
  className={({ isActive }) =>
    `
      relative
      flex
      items-center
      gap-3
      px-4
      py-3
      rounded-xl
      transition-all
      duration-200
      ${
        isActive
          ? "bg-surface-container text-primary font-semibold"
          : "text-primary hover:bg-surface-container"
      }
    `
  }
>
  {({ isActive }) => (
    <>
      {isActive && (
        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary" />
      )}

      <Icon size={18} />

      <span>{item.title}</span>
    </>
  )}
</NavLink>
  );
}
