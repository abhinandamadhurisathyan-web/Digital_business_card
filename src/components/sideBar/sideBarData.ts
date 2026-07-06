import {
  QrCode,
  User,
  CreditCard,
  ChartColumn,
  LogOut,
} from "lucide-react";

import { type SidebarItemType } from "../../types/sidebar";

export const sidebarItems: SidebarItemType[] = [
  {
    title: "QR Code",
    path: "/qr-code",
    icon: QrCode,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "My Card",
    path: "/my-card",
    icon: CreditCard,
  },
  {
    title: "QR Library",
    path: "/qr-library",
    icon: QrCode,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: ChartColumn,
  },

  
];

export const logoutItem: SidebarItemType = {
  title: "Logout",
  path: "/login",
  icon: LogOut,
};