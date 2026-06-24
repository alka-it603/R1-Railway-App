import React from "react";

import EmergencyBanner from "@/components/rpf/dashboard/EmergencyBanner";
import StatsCard from "@/components/rpf/dashboard/StatsCard";
import SOSQueueTable from "@/components/rpf/dashboard/SOSQueueTable";
import EmergencyEscalationCard from "@/components/rpf/dashboard/EmergencyEscalationCard";
import EscalationTimeline from "@/components/rpf/dashboard/EscalationTimeline";
import SOSAnalytics from "@/components/rpf/dashboard/SOSAnalytics";
import CommunicationHub from "@/components/rpf/dashboard/CommunicationHub";

export default function Dashboard() {
 return (
 <div className="space-y-4 w-full box-border pb-6">
    {/* 1. Automated Escalation Banner */}
    <EmergencyBanner />

    {/* 2. Unified KPI Summary Statistics */}
    <div className="grid grid-cols-2 xl:grid-cols-6 gap-4">
      <StatsCard title="Active SOS" value="12" color="blue" />
      <StatsCard title="Critical SOS" value="04" color="red" />
      <StatsCard title="Security (24h)" value="15" color="orange" />
      <StatsCard title="Medical (24h)" value="28" color="green" />
      <StatsCard title="Avg Response" value="4.2m" color="indigo" />
      <StatsCard title="Resolved Today" value="142" color="emerald" />
    </div>

    {/* 3. 🛠️ Balanced 3-Column Command Center Workspace Grid */}
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-stretch w-full min-w-0">

      {/* LEFT COLUMN: Sidebar Timeline (1 Part) */}
      <div className="xl:col-span-1 w-full space-y-6 min-h-0">
        <EscalationTimeline />
      </div>

      {/* CENTER COLUMN: Incidents Queue + Integrated Emergency Control Actions (3 Parts) */}
      <div className="xl:col-span-2 flex flex-col gap-6 h-full items-stretch w-full min-w-0 overflow-hidden">

        {/* Active Emergency SOS Table */}
        <div className="w-full overflow-x-auto rounded-xl">
          <SOSQueueTable />
        </div>

        {/* Integrated Emergency Dispatch Control */}
        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm w-full">
          <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Emergency Dispatch Control</h3>
              <p className="text-xs text-slate-500">Rapid deployment actions for Ahmedabad Junction terminal units</p>
            </div>
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-50 text-red-600 animate-pulse">
              Live Control Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 border border-red-100 text-red-700 font-semibold rounded-xl transition duration-200 shadow-sm group">
              <span className="flex flex-col items-start">
                <span className="text-sm">Broadcast Emergency SOS</span>
                <span className="text-xs font-normal text-red-500 mt-0.5">Alert all station field porters</span>
              </span>
              <span className="p-2 bg-red-600 text-white rounded-lg group-hover:scale-105 transition-transform">🚨</span>
            </button>

            <button className="flex items-center justify-between p-4 bg-amber-50 hover:bg-amber-100 border border-amber-100 text-amber-700 font-semibold rounded-xl transition duration-200 shadow-sm group">
              <span className="flex flex-col items-start">
                <span className="text-sm">Deploy Medical Team</span>
                <span className="text-xs font-normal text-amber-600 mt-0.5">Dispatch first responders to platform</span>
              </span>
              <span className="p-2 bg-amber-500 text-white rounded-lg group-hover:scale-105 transition-transform">🏥</span>
            </button>
          </div>
        </div>

        {/* Gap fixer: make analytics stretch to fill remaining vertical space */}
        <div className="flex-1 w-full min-h-0">
          <SOSAnalytics />
        </div>

      </div>

      {/* RIGHT COLUMN: Escalation Context & Communications Hub (1 Part) */}
      <div className="xl:col-span-1 flex flex-col gap-6 h-full w-full min-h-0">
        <EmergencyEscalationCard />
        <CommunicationHub />
      </div>

    </div>
  </div>
);
}