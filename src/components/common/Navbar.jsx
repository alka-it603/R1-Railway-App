import React, { useState } from "react";
import { Search, Bell, User, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar({ setIsOpen }) {
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Hotels", to: "/hotels" },
    { label: "AI Assistant", to: "/ai-assistant" },
    { label: "Tourist Guide", to: "/tourist-guide" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="w-full h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-50 shadow-xs">
      <div className="flex items-center gap-4">

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu className="w-5 h-5" />
        </button>

        <NavLink to="/" className="text-2xl font-black tracking-tight text-slate-900 cursor-pointer">
          R1
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setActiveTab(link.label)}
              className={({ isActive }) =>
                `text-sm font-medium transition-all pb-1 pt-0.5 relative cursor-pointer ${
                  isActive || activeTab === link.label
                    ? "text-slate-900 font-semibold"
                    : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {link.label}
              {activeTab === link.label && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900 rounded-full" />
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Search Bar & Utilities */}
      <div className="flex items-center gap-4 flex-1 max-w-md justify-end">
        <div className="relative w-full max-w-xs hidden sm:block">
          <input
            type="text"
            placeholder="Search trains, stations..."
            className="w-full h-9 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 pl-3 pr-8 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-white transition-all"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors relative cursor-pointer">
          <Bell className="w-4 h-4" />
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-2 right-2" />
        </button>

        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors border border-slate-200 cursor-pointer">
          <User className="w-4 h-4" />
        </button>
      </div>

    </nav>
  );
}