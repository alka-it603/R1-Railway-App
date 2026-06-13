import React from "react";

const requests = [
  {
    id: "#REQ001",
    passenger: "Rahul Sharma",
    service: "Luggage",
    platform: "Platform 2",
    status: "Pending",
  },
  {
    id: "#REQ002",
    passenger: "Priya Patel",
    service: "Wheelchair",
    platform: "Platform 5",
    status: "Assigned",
  },
  {
    id: "#REQ003",
    passenger: "Amit Kumar",
    service: "Combined",
    platform: "Platform 1",
    status: "Completed",
  },
  {
    id: "#REQ004",
    passenger: "Neha Shah",
    service: "Luggage",
    platform: "Platform 4",
    status: "Pending",
  },
];

export default function RecentRequestsTable() {
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Recent Requests
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Latest porter service requests received.
          </p>
        </div>

        <button className="text-blue-700 font-medium hover:underline">
          View All
        </button>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

              <th className="pb-4">Request ID</th>

              <th className="pb-4">Passenger</th>

              <th className="pb-4">Service</th>

              <th className="pb-4">Platform</th>

              <th className="pb-4">Status</th>

              <th className="pb-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition"
              >

                <td className="py-4 font-medium text-slate-800">
                  {item.id}
                </td>

                <td className="py-4 text-slate-700">
                  {item.passenger}
                </td>

                <td className="py-4">
                  {item.service}
                </td>

                <td className="py-4">
                  {item.platform}
                </td>

                <td className="py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="py-4">

                  <button className="px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition">

                    View

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}