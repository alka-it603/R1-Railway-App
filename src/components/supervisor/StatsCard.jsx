import React from "react";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            {value}
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            {subtitle}
          </p>
        </div>

        {/* Right Icon */}
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}