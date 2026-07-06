import { useState } from "react";
import Sidebar from "../sideBar/Sidebar";
import TopBar from "../TopBar/TopBar";
import profilePic from "./../../assets/profilePic.jpg";

interface EmployeeLayoutProps {
  children: React.ReactNode;
}

export default function EmployeeLayout({
  children,
}: EmployeeLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex flex-1 flex-col">

        <TopBar
          employeeName="Elena Thorne"
          designation="Enterprise Admin"
          profileImage={profilePic}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 p-6 lg:p-10">
          {children}
        </main>

      </div>

    </div>
  );
}