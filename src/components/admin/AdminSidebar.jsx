import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserCog,
  BarChart3,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Manage Users",
    icon: Users,
    path: "/admin/manage-users",
  },
  {
    name: "Manage Stations",
    icon: Building2,
    path: "/admin/manage-stations",
  },
  {
    name: "Manage Supervisors",
    icon: UserCog,
    path: "/admin/manage-supervisors",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
  },
  {
    name: "Reports",
    icon: FileText,
    path: "/admin/reports",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between">

      {/* Top */}

      <div>

        {/* Logo */}

        <NavLink to="/admin/dashboard" className="block px-7 py-7 border-b border-slate-200">

          <h1 className="text-4xl font-bold text-blue-900">
            R1
          </h1>

          <p className="text-slate-500 mt-2">
            Admin Panel
          </p>

        </NavLink>

        {/* Menu */}

        <nav className="mt-6 px-4 space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 rounded-xl transition-all
                  
                  ${
                    isActive
                      ? "bg-blue-900 text-white shadow-md"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>
            );
          })}

        </nav>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-200 p-4">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">

            A

          </div>

          <div>

            <p className="font-semibold text-slate-800">
              Admin
            </p>

            <p className="text-sm text-slate-500">
              Railway Logistics
            </p>

          </div>

        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}