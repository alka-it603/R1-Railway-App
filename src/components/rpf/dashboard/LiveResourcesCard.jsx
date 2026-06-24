import React from "react";
import { Eye, Send } from "lucide-react";

const sosRequests = [
  {
    id: "SOS-1024",
    passenger: "Rahul Sharma",
    station: "Ahmedabad Jn.",
    platform: "PF-3",
    type: "Medical",
    priority: "Critical",
    status: "Pending",
  },
  {
    id: "SOS-1025",
    passenger: "Priya Verma",
    station: "Sabarmati",
    platform: "PF-1",
    type: "Security",
    priority: "High",
    status: "Assigned",
  },
  {
    id: "SOS-1026",
    passenger: "Amit Patel",
    station: "Maninagar",
    platform: "PF-2",
    type: "Medical",
    priority: "Medium",
    status: "In Progress",
  },
];

export default function SOSQueueTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b">

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Live SOS Queue
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Real-time emergency requests received from passengers.
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-[#0B2E63] text-white hover:bg-[#123B7A] transition">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr className="text-left text-sm text-slate-600">

              <th className="px-6 py-4">SOS ID</th>

              <th className="px-6 py-4">Passenger</th>

              <th className="px-6 py-4">Station</th>

              <th className="px-6 py-4">Platform</th>

              <th className="px-6 py-4">Emergency</th>

              <th className="px-6 py-4">Priority</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {sosRequests.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="px-6 py-5 font-medium text-[#0B2E63]">
                  {item.id}
                </td>

                <td className="px-6 py-5">
                  {item.passenger}
                </td>

                <td className="px-6 py-5">
                  {item.station}
                </td>

                <td className="px-6 py-5">
                  {item.platform}
                </td>

                <td className="px-6 py-5">
                  {item.type}
                </td>

                {/* Priority */}

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      item.priority === "Critical"
                        ? "bg-red-100 text-red-600"
                        : item.priority === "High"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.priority}
                  </span>

                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      item.status === "Pending"
                        ? "bg-red-50 text-red-600"
                        : item.status === "Assigned"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex items-center justify-center gap-3">

                    <button className="h-9 w-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center">

                      <Eye size={18} />

                    </button>

                    <button className="h-9 w-9 rounded-lg bg-[#0B2E63] text-white hover:bg-[#123B7A] flex items-center justify-center">

                      <Send size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}