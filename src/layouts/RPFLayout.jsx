import React from "react";
import { Outlet } from "react-router-dom";

import RPFSidebar from "@/components/rpf/RPFSidebar";
import RPFHeader from "@/components/rpf/RPFHeader";

export default function RPFLayout() {
  return (
    <div className="flex h-screen bg-[#F4F7FB]">
      {/* Sidebar */}
      <RPFSidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Header */}
        <RPFHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}