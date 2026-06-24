import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShieldAlert,
  Truck,
  History,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/rpf/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
 
  {
    name: "Active Deployments",
    path: "/rpf/active-deployments",
    icon: <Truck size={18} />,
  },
  {
    name: "Incident History",
    path: "/rpf/incident-history",
    icon: <History size={18} />,
  },
  {
    name: "Analytics",
    path: "/rpf/analytics",
    icon: <BarChart3 size={18} />,
  },
  {
    name: "Communication",
    path: "/rpf/communication",
    icon: <MessageSquare size={18} />,
  },
  {
    name: "Settings",
    path: "/rpf/settings",
    icon: <Settings size={18} />,
  },
];

export default function RPFSidebar() {
  return (
    <aside className="w-72 bg-[#0B2E63] text-white flex flex-col justify-between shadow-xl">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="px-6 py-6 border-b border-blue-900">
          <h1 className="text-3xl font-bold tracking-wide">R1</h1>

          <p className="text-blue-200 text-sm mt-1">
            Railway Command Center
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#0B2E63] font-semibold shadow-md"
                    : "hover:bg-[#123B7A] text-blue-100"
                }`
              }
            >
              {item.icon}

              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Officer Card */}
      <div className="p-5 border-t border-blue-900">
        <div className="bg-[#123B7A] rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-white text-[#0B2E63] flex items-center justify-center font-bold">
              R
            </div>

            <div>
              <h3 className="font-semibold">
                RPF Commander
              </h3>

              <p className="text-xs text-blue-200">
                Ahmedabad Junction
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}