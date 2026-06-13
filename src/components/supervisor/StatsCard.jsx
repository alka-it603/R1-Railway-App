import React from "react";
import { Search, Bell } from "lucide-react";

export default function SupervisorHeader() {
  return (
    <header className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6 py-4 mb-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Supervisor Dashboard
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Manage porter requests and operations efficiently.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search Box */}
        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search requests..."
            className="w-72 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Notification */}
        <button className="relative h-11 w-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition">

          <Bell size={20} className="text-slate-700" />

          <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">

          <div className="h-11 w-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
            S
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-slate-900">
              Supervisor
            </h3>

            <p className="text-xs text-slate-500">
              Ahmedabad Junction
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}