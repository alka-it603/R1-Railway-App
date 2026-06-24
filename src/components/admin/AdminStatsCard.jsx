import React from "react";

export default function AdminStatsCard({
  title,
  value,
  subtitle,
  icon,
  iconBg = "bg-blue-50",
  iconColor = "text-blue-900",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-all duration-300">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg}`}
        >
          <div className={iconColor}>
            {icon}
          </div>
        </div>

      </div>

      {/* Bottom */}

      {subtitle && (
        <div className="mt-6">

          <span className="text-sm text-slate-500">
            {subtitle}
          </span>

        </div>
      )}

    </div>
  );
}