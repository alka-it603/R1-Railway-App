import React from "react";
import {
  AlertTriangle,
  ArrowRight,
  Shield,
  CheckCircle2,
} from "lucide-react";

const activeCase = {
  sosId: "SOS-1024",
  passenger: "Rahul Sharma",
  location: "Platform 3, Ahmedabad Junction",
  issue: "Medical Emergency",
  localStatus: "No RPF Team Available",
  escalatedTo: "Sabarmati Junction RPF",
  eta: "4 Minutes",
  status: "Team Dispatched",
};

export default function EmergencyEscalationCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full">

      {/* Header */}

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-semibold text-slate-800">
          Emergency Escalation
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Automatic backup response tracking
        </p>

      </div>

      {/* Content */}

      <div className="p-6 space-y-5">

        {/* SOS */}

        <div className="flex gap-3">

          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">

            <AlertTriangle size={18} className="text-red-600" />

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              {activeCase.sosId}
            </h3>

            <p className="text-sm text-slate-500">
              {activeCase.passenger}
            </p>

            <p className="text-sm text-slate-500">
              {activeCase.location}
            </p>

          </div>

        </div>

        {/* Emergency */}

        <div className="rounded-xl bg-red-50 p-4">

          <p className="text-sm text-slate-500">
            Emergency Type
          </p>

          <p className="font-semibold text-red-600 mt-1">
            {activeCase.issue}
          </p>

        </div>

        {/* Local Status */}

        <div className="rounded-xl bg-yellow-50 p-4">

          <p className="text-sm text-slate-500">
            Ahmedabad Junction
          </p>

          <p className="font-semibold text-yellow-700 mt-1">
            {activeCase.localStatus}
          </p>

        </div>

        {/* Arrow */}

        <div className="flex justify-center">

          <ArrowRight
            className="text-[#0B2E63]"
            size={28}
          />

        </div>

        {/* Escalated */}

        <div className="rounded-xl bg-blue-50 p-4">

          <div className="flex items-center gap-2 mb-2">

            <Shield
              size={18}
              className="text-[#0B2E63]"
            />

            <span className="font-semibold text-slate-700">
              Escalated To
            </span>

          </div>

          <p className="text-[#0B2E63] font-semibold">
            {activeCase.escalatedTo}
          </p>

        </div>

        {/* Status */}

        <div className="rounded-xl bg-green-50 p-4">

          <div className="flex items-center gap-2">

            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold text-green-700">
              {activeCase.status}
            </span>

          </div>

          <p className="text-sm text-slate-500 mt-2">
            Estimated Arrival Time
          </p>

          <p className="font-bold text-lg text-[#0B2E63]">
            {activeCase.eta}
          </p>

        </div>

      </div>
    </div>
  );
}