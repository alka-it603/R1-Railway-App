import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Briefcase,
  History,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/supervisor/dashboard",
  },
  {
    name: "Incoming Requests",
    icon: <ClipboardList size={20} />,
    path: "/supervisor/incoming-requests",
  },
  {
    name: "Registered Porters",
    icon: <Users size={20} />,
    path: "/supervisor/registered-porters",
  },
  {
    name: "Active Jobs",
    icon: <Briefcase size={20} />,
    path: "/supervisor/active-jobs",
  },
  {
    name: "Service History",
    icon: <History size={20} />,
    path: "/supervisor/service-history",
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    path: "/supervisor/settings",
  },
];

export default function SupervisorSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 flex flex-col justify-between">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="px-8 py-8 border-b border-slate-100">
          <h1 className="text-3xl font-bold text-blue-700">
            R1
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Supervisor Panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl mb-2 transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {item.icon}

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}

        </nav>
      </div>

      {/* Bottom Profile */}
      <div className="border-t border-slate-100 p-5">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Supervisor
            </h3>

            <p className="text-sm text-slate-500">
              ADI Station
            </p>
          </div>

        </div>

        <button className="flex items-center gap-3 w-full justify-center bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>
    </aside>
  );
}