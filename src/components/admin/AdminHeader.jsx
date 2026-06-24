import React from "react";
import { useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";

export default function AdminHeader() {
  const location = useLocation();

  const pageTitles = {
    "/admin/dashboard": {
      title: "Admin Dashboard",
      subtitle: "Monitor overall railway logistics and system performance.",
    },

    "/admin/manage-users": {
      title: "Manage Users",
      subtitle: "View and manage all registered passengers.",
    },

    "/admin/manage-stations": {
      title: "Manage Stations",
      subtitle: "Manage railway stations and related information.",
    },

    "/admin/manage-supervisors": {
      title: "Manage Supervisors",
      subtitle: "Add, update and monitor station supervisors.",
    },

    "/admin/analytics": {
      title: "Analytics",
      subtitle: "View system analytics and performance metrics.",
    },

    "/admin/reports": {
      title: "Reports",
      subtitle: "Generate and download operational reports.",
    },

    "/admin/settings": {
      title: "Settings",
      subtitle: "Configure application preferences.",
    },
  };

  const current =
    pageTitles[location.pathname] || {
      title: "Admin Panel",
      subtitle: "Railway Logistics Management",
    };

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">

      {/* Left */}

      <div>
        <h1 className="text-4xl font-bold text-blue-900">
          {current.title}
        </h1>

        <p className="text-slate-500 mt-1">
          {current.subtitle}
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-200"
          />

        </div>

        {/* Notification */}

        <button className="relative w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition">

          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-2">

          <div className="w-11 h-11 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div className="hidden md:block">

            <p className="font-semibold text-slate-800">
              Admin
            </p>

            <p className="text-sm text-slate-500">
              Railway Logistics
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}