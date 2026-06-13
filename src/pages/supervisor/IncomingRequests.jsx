import React from "react";
import { Search, Filter } from "lucide-react";

const requests = [
  {
    id: "REQ-1001",
    passenger: "Rahul Sharma",
    service: "Luggage",
    location: "Platform 3",
    porter: "Not Assigned",
    priority: "High",
    status: "Pending",
  },
  {
    id: "REQ-1002",
    passenger: "Priya Verma",
    service: "Wheelchair",
    location: "Platform 1",
    porter: "Ramesh",
    priority: "Medium",
    status: "Assigned",
  },
  {
    id: "REQ-1003",
    passenger: "Amit Singh",
    service: "Combined",
    location: "Platform 6",
    porter: "Not Assigned",
    priority: "High",
    status: "Pending",
  },
];

export default function IncomingRequests() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Incoming Requests
          </h1>

          <p className="text-slate-500 mt-1">
            Manage newly received porter requests.
          </p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4 justify-between mb-6">
        <div className="relative w-full md:w-96">
          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search request..."
            className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-slate-100">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr className="text-left">
              <th className="p-4">Request ID</th>
              <th className="p-4">Passenger</th>
              <th className="p-4">Service</th>
              <th className="p-4">Location</th>
              <th className="p-4">Assigned Porter</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4">{request.id}</td>

                <td className="p-4">{request.passenger}</td>

                <td className="p-4">{request.service}</td>

                <td className="p-4">{request.location}</td>

                <td className="p-4">{request.porter}</td>

                <td className="p-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {request.priority}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      request.status === "Assigned"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>

                <td className="p-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Assign
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