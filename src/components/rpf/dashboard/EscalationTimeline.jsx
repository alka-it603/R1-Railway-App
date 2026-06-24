import React from "react";
import {
  AlertTriangle,
  Search,
  ArrowRightCircle,
  Shield,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    icon: <AlertTriangle size={18} />,
    title: "SOS Triggered",
    subtitle: "Passenger pressed SOS button",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <Search size={18} />,
    title: "Local Team Checked",
    subtitle: "Ahmedabad Junction RPF availability verified",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: <ArrowRightCircle size={18} />,
    title: "Escalated",
    subtitle: "Forwarded to Sabarmati Junction RPF",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Shield size={18} />,
    title: "Team Dispatched",
    subtitle: "Nearest available RPF unit assigned",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: "Incident Resolved",
    subtitle: "Passenger marked safe",
    color: "bg-green-100 text-green-700",
  },
];

export default function EscalationTimeline() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">

      {/* Header */}

      <div className="px-6 py-5 border-b">

        <h2 className="text-lg font-semibold text-slate-800">
          Escalation Timeline
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Automatic emergency response workflow
        </p>

      </div>

      {/* Timeline */}

      <div className="p-5">

        <div className="space-y-5">

          {timeline.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start gap-4"
            >
              {/* Vertical Line */}

              {index !== timeline.length - 1 && (
                <div className="absolute left-[18px] top-10 h-10 w-[2px] bg-slate-200"></div>
              )}

              {/* Icon */}

              <div
                className={`h-9 w-9 rounded-full flex items-center justify-center ${step.color}`}
              >
                {step.icon}
              </div>

              {/* Text */}

              <div>

                <h3 className="font-semibold text-slate-800">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {step.subtitle}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}