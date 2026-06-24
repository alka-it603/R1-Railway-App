import React from "react";

import CommunicationHub from "@/components/rpf/dashboard/CommunicationHub";

export default function CommunicationCenter() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-2xl font-bold text-[#0B2E63]">
          Communication Center
        </h1>

        <p className="text-slate-500 mt-1">
          Broadcast messages to RPF and Medical teams.
        </p>

      </div>

      <CommunicationHub />

    </div>
  );
}