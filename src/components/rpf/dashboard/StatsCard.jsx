import React from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  HeartPulse,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    icon: <ShieldCheck size={26} />,
  },

  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-100",
    icon: <ShieldAlert size={26} />,
  },

  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    icon: <Activity size={26} />,
  },

  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    icon: <HeartPulse size={26} />,
  },

  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
    icon: <Clock3 size={26} />,
  },

  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    icon: <CheckCircle2 size={26} />,
  },
};

export default function StatsCard({
  title,
  value,
  color = "blue",
}) {
  const style = colorMap[color];

  return (
    <div
      className={`bg-white rounded-2xl border ${style.border} shadow-sm hover:shadow-md transition-all duration-300 p-5`}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`h-14 w-14 rounded-xl flex items-center justify-center ${style.bg} ${style.text}`}
        >
          {style.icon}
        </div>

      </div>
    </div>
  );
}