"use client";
// import Link from "next/link";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import FooterRegister from "@/components/FooterRegister";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to open on dashboard

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <DashboardHeader showMenuButton={true} onMenuClick={toggleSidebar} />
      </div>
      <div className="flex flex-1 overflow-hidden">
        {" "}
        {/* Ensures this section takes remaining height and handles overflow */}
        {isSidebarOpen && <Sidebar />}
        <main className="flex-1 p-4 overflow-y-auto transition-all duration-300">
          {/* Your main page content goes here */}
        </main>
      </div>
      <div className="w-full">
        {" "}
        {/* Footer container, no longer fixed */}
        <FooterRegister />
      </div>
    </div>
  );
}
