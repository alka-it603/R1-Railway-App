import React from "react";
import {
  Search,
  Bell,
  Settings,
  ShieldCheck,
} from "lucide-react";

export default function RPFHeader() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-[420px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search SOS ID, Passenger, Train..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-[#0B2E63] focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Emergency Status */}
        <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 border border-green-200">
          <ShieldCheck
            size={18}
            className="text-green-600"
          />

          <span className="text-sm font-medium text-green-700">
            System Active
          </span>
        </div>

        {/* Notification */}
        <button className="relative h-11 w-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100">
          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* Settings */}
        <button className="h-11 w-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 cursor-pointer">
          <div className="h-11 w-11 rounded-full bg-[#0B2E63] text-white flex items-center justify-center font-bold">
            R
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Cmdr. Rajesh Iyer
            </h3>

            <p className="text-xs text-slate-500">
              Chief Operations Officer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}