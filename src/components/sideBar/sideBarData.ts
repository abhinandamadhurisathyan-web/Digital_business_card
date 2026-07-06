import {
  QrCode,
  User,
  CreditCard,
  ChartColumn,
  LogOut,
  LayoutDashboard,
  Building2,
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
    title: "Analytics",
    path: "/analytics",
    icon: ChartColumn,
  },
  {
    title: "QR Library",
    path: "/qr-library",
    icon: QrCode,
  },
];

export const adminSidebarItems: SidebarItemType[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Organization",
    path: "/organization",
    icon: Building2,
  },
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
    title: "Analytics",
    path: "/analytics",
    icon: ChartColumn,
  },
  {
    title: "QR Library",
    path: "/qr-library",
    icon: QrCode,
  },
];

export const logoutItem: SidebarItemType = {
  title: "Logout",
  path: "/login",
  icon: LogOut,
};
