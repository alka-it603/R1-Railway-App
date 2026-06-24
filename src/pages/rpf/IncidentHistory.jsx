import React from "react";

export default function IncidentHistory() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h1 className="text-2xl font-bold text-[#0B2E63]">
        Incident History
      </h1>

      <p className="text-slate-500 mt-2 mb-6">
        Review previously resolved emergency cases.
      </p>

      <div className="border rounded-xl p-10 text-center text-slate-400">

        No historical incidents available.

      </div>

    </div>
  );
}