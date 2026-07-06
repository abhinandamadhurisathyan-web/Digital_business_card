import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { getAdminSession } from "../lib/adminSession";

interface RequireAdminProps {
  children: ReactNode;
}

export default function RequireAdmin({ children }: RequireAdminProps) {
  return getAdminSession() ? children : <Navigate to="/login" replace />;
}
