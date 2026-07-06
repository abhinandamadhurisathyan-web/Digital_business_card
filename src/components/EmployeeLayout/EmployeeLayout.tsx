import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../sideBar/Sidebar";
import TopBar from "../TopBar/TopBar";
import profilePic from "./../../assets/profilePic.jpg";
import { getAdminSession } from "../../lib/adminSession";



export default function EmployeeLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isAdmin = Boolean(getAdminSession());
  const location = useLocation();

const isScrollable =
  location.pathname !== "/profile";

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

        <main
          className={`flex-1 p-6 lg:p-10 ${
            isScrollable ? "overflow-y-auto" : "overflow-hidden"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
