import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../sideBar/Sidebar";
import TopBar from "../TopBar/TopBar";
import profilePic from "./../../assets/profilePic.jpg";
import { getAdminSession } from "../../lib/adminSession";



export default function EmployeeLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isAdmin = Boolean(getAdminSession());

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        variant={isAdmin ? "admin" : "employee"}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar
          employeeName="Alex Rivera"
          designation="Senior Technical Consultant"
          profileImage={profilePic}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
