import { useState } from "react";

import profilePic from "../assets/profilePic.jpg";
import Sidebar from "./sideBar/Sidebar";
import TopBar from "./TopBar/TopBar";

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        variant="admin"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          employeeName="Alex Rivera"
          designation="Enterprise Admin"
          profileImage={profilePic}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
