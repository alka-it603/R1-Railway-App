import React from "react";
import { Search, Filter, Plus } from "lucide-react";

const stations = [
  {
    id: "ST001",
    name: "Ahmedabad Junction",
    supervisor: "Rajesh Patel",
    porters: 120,
    activeJobs: 28,
    status: "Active",
  },
  {
    id: "ST002",
    name: "Surat Junction",
    supervisor: "Anil Sharma",
    porters: 96,
    activeJobs: 19,
    status: "Active",
  },
  {
    id: "ST003",
    name: "Vadodara Junction",
    supervisor: "Mehul Shah",
    porters: 84,
    activeJobs: 11,
    status: "Maintenance",
  },
];

export default function ManageStations() {
  return (
    <div className="space-y-6">

      {/* Top Controls */}

      <div className="flex flex-col lg:flex-row justify-between gap-4">

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search stations..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-200"
          />

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button className="flex items-center gap-2 border border-slate-200 bg-white px-5 py-3 rounded-xl hover:bg-slate-50">

            <Filter size={18} />

            Filter

          </button>

          <button className="flex items-center gap-2 bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800">

            <Plus size={18} />

            Add Station

          </button>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="text-left px-6 py-4">
                Station ID
              </th>

              <th className="text-left px-6 py-4">
                Station Name
              </th>

              <th className="text-left px-6 py-4">
                Supervisor
              </th>

              <th className="text-left px-6 py-4">
                Porters
              </th>

              <th className="text-left px-6 py-4">
                Active Jobs
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-left px-6 py-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {stations.map((station) => (

              <tr
                key={station.id}
                className="border-t border-slate-100 hover:bg-slate-50 transition"
              >

                <td className="px-6 py-4 font-medium">
                  {station.id}
                </td>

                <td className="px-6 py-4">
                  {station.name}
                </td>

                <td className="px-6 py-4">
                  {station.supervisor}
                </td>

                <td className="px-6 py-4">
                  {station.porters}
                </td>

                <td className="px-6 py-4">
                  {station.activeJobs}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      station.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {station.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex gap-2">

                    <button className="px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800">

                      View

                    </button>

                    <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">

                      Edit

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