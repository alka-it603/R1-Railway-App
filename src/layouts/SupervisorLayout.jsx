import React from "react";
import { Outlet } from "react-router-dom";

import SupervisorSidebar from "@/components/supervisor/SupervisorSidebar";
import SupervisorHeader from "@/components/supervisor/SupervisorHeader";

export default function SupervisorLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Left Sidebar */}
      <SupervisorSidebar />

      {/* Right Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top Header */}
        <SupervisorHeader />

        {/* Current Page */}
        <Outlet />
      </div>
    </div>
  );
}