import React from "react";

export default function Settings() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <h1 className="text-2xl font-bold text-[#0B2E63]">
        Settings
      </h1>

      <p className="text-slate-500 mt-2 mb-8">
        Configure emergency response preferences.
      </p>

      <div className="space-y-6">

        <div className="border rounded-xl p-5">

          <h3 className="font-semibold mb-2">
            Automatic Escalation
          </h3>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            <span>
              Enable automatic escalation to nearby stations
            </span>

          </label>

        </div>

        <div className="border rounded-xl p-5">

          <h3 className="font-semibold mb-2">
            Emergency Notifications
          </h3>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            <span>
              Send instant notifications to Medical teams
            </span>

          </label>

        </div>

        <div className="border rounded-xl p-5">

          <h3 className="font-semibold mb-2">
            Response Timeout
          </h3>

          <select className="border rounded-lg p-2 w-56">

            <option>30 Seconds</option>

            <option>60 Seconds</option>

            <option>90 Seconds</option>

            <option>120 Seconds</option>

          </select>

        </div>

      </div>

    </div>
  );
}