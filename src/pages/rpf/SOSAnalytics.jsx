import React from "react";

import SOSAnalytics from "@/components/rpf/dashboard/SOSAnalytics";

export default function Analytics() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-2xl font-bold text-[#0B2E63]">
          Analytics
        </h1>

        <p className="text-slate-500 mt-1">
          Emergency response insights.
        </p>

      </div>

      <SOSAnalytics />

    </div>
  );
}