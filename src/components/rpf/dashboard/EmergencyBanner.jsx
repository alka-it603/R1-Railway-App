import React from "react";
import { ShieldAlert, ArrowRight } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-[#0B2E63] to-[#174A91] p-6 shadow-lg text-white">

      <div className="flex items-center justify-between flex-wrap gap-4">

        {/* Left */}
        <div className="flex items-start gap-4">

          <div className="h-14 w-14 rounded-full bg-white/15 flex items-center justify-center">
            <ShieldAlert size={30} />
          </div>

          <div>

            <p className="text-sm uppercase tracking-widest text-blue-200">
              Automated Emergency Escalation
            </p>

            <h2 className="text-2xl font-bold mt-1">
              Ahmedabad Junction RPF Unavailable
            </h2>

            <p className="mt-2 text-blue-100 max-w-3xl leading-relaxed">
              SOS Case <strong>#SOS-2026-1045</strong> has been
              automatically escalated to
              <strong> Sabarmati Junction RPF Unit </strong>
              because no active response team was available at
              Ahmedabad Junction.
            </p>

          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            BACKUP ENGAGED
          </span>

          <button className="bg-white text-[#0B2E63] px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition">

            View Incident

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}