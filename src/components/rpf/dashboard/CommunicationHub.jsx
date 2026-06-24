import React from "react";
import {
  Radio,
  Shield,
  Ambulance,
  Bell,
  Send,
} from "lucide-react";

const notifications = [
  {
    title: "SOS #SOS-1024 escalated to Sabarmati",
    time: "2 min ago",
  },
  {
    title: "Medical team dispatched to Platform 4",
    time: "5 min ago",
  },
  {
    title: "RPF Unit Alpha marked Available",
    time: "11 min ago",
  },
];

export default function CommunicationHub() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">

      {/* Header */}

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-semibold text-slate-800">
          Communication Hub
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Broadcast emergency updates instantly
        </p>

      </div>

      {/* Actions */}

      <div className="p-5 space-y-3">

        <button className="w-full flex items-center justify-between bg-[#0B2E63] text-white rounded-xl px-4 py-3 hover:bg-[#174A91] transition">

          <div className="flex items-center gap-3">
            <Radio size={18} />

            <span>Broadcast to All Units</span>
          </div>

          <Send size={18} />

        </button>

        <button className="w-full flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 hover:bg-slate-50 transition">

          <Shield
            size={18}
            className="text-[#0B2E63]"
          />

          Notify RPF Teams

        </button>

        <button className="w-full flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 hover:bg-slate-50 transition">

          <Ambulance
            size={18}
            className="text-[#0B2E63]"
          />

          Notify Medical Teams

        </button>

      </div>

      {/* Notifications */}

      <div className="border-t p-5 flex flex-col flex-1">

        <div className="flex items-center gap-2 mb-4">

          <Bell
            size={18}
            className="text-[#0B2E63]"
          />

          <h3 className="font-semibold text-slate-800">
            Recent Alerts
          </h3>

        </div>

        <div className="space-y-3 overflow-y-auto">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="rounded-xl bg-slate-50 p-3"
            >

              <p className="text-sm font-medium text-slate-700">
                {item.title}
              </p>

              <p className="text-xs text-slate-500 mt-1">
                {item.time}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}