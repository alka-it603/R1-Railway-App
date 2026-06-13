import React from "react";

export default function VolumeTrends() {
  const data = [20, 35, 45, 60, 50, 80, 65];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">
          Volume Trends
        </h2>

        <span className="text-sm text-slate-500">
          Last 7 Days
        </span>
      </div>

      <div className="flex items-end justify-between h-48 gap-2">

        {data.map((value, index) => (

          <div
            key={index}
            className="flex flex-col items-center flex-1"
          >
            <div
              className="bg-blue-700 rounded-t-md w-full transition-all"
              style={{
                height: `${value}%`,
              }}
            />

            <span className="text-xs text-slate-400 mt-2">
              D{index + 1}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}