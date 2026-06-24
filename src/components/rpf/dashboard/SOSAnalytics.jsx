import React from "react";

const analytics = [
  {
    title: "Medical Emergencies",
    value: 58,
    total: 100,
    color: "bg-green-500",
  },
  {
    title: "Security Incidents",
    value: 32,
    total: 100,
    color: "bg-red-500",
  },
  {
    title: "Resolved Within 5 Min",
    value: 82,
    total: 100,
    color: "bg-blue-600",
  },
  {
    title: "Escalated Cases",
    value: 14,
    total: 100,
    color: "bg-orange-500",
  },
];

export default function SOSAnalytics() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">

      {/* Header */}

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-semibold text-slate-800">
          Emergency Analytics
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Live emergency performance overview
        </p>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-2 gap-4 p-6">

        <div className="bg-slate-50 rounded-xl p-4">

          <p className="text-sm text-slate-500">
            Today's SOS
          </p>

          <h2 className="text-3xl font-bold text-[#0B2E63] mt-2">
            143
          </h2>

        </div>

        <div className="bg-slate-50 rounded-xl p-4">

          <p className="text-sm text-slate-500">
            Avg Response
          </p>

          <h2 className="text-3xl font-bold text-[#0B2E63] mt-2">
            4.2 min
          </h2>

        </div>

      </div>

      {/* Progress Bars */}

      <div className="px-6 pb-6 space-y-5">

        {analytics.map((item) => (

          <div key={item.title}>

            <div className="flex justify-between mb-2">

              <span className="text-sm font-medium text-slate-700">
                {item.title}
              </span>

              <span className="text-sm text-slate-500">
                {item.value}%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">

              <div
                className={`${item.color} h-full rounded-full transition-all duration-500`}
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}