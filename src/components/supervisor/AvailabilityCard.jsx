import React from "react";

export default function AvailabilityCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      <h2 className="font-semibold text-lg mb-6">
        Coolie Availability
      </h2>

      <div className="flex justify-center">

        <div className="w-36 h-36 rounded-full border-[12px] border-blue-700 flex items-center justify-center">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              70%
            </h2>

            <p className="text-sm text-slate-500">
              Available
            </p>

          </div>

        </div>

      </div>

      <div className="mt-8 space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-600">
            Active Jobs
          </span>

          <span className="font-semibold">
            32
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">
            Available
          </span>

          <span className="font-semibold text-green-600">
            73
          </span>
        </div>

      </div>

    </div>
  );
}