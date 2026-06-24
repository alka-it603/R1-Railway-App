import React from "react";
import { Search, Filter, UserPlus } from "lucide-react";

const supervisors = [
  {
    id: "SUP001",
    name: "Rajesh Patel",
    station: "Ahmedabad Junction",
    email: "rajesh@r1.com",
    phone: "+91 9876543210",
    status: "Active",
  },
  {
    id: "SUP002",
    name: "Anil Sharma",
    station: "Surat Junction",
    email: "anil@r1.com",
    phone: "+91 9988776655",
    status: "Active",
  },
  {
    id: "SUP003",
    name: "Mehul Shah",
    station: "Vadodara Junction",
    email: "mehul@r1.com",
    phone: "+91 9123456789",
    status: "Inactive",
  },
];

export default function ManageSupervisors() {
  return (
    <div className="space-y-6">

      {/* Top Bar */}

      <div className="flex flex-col lg:flex-row justify-between gap-4">

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search supervisors..."
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

            <UserPlus size={18} />

            Add Supervisor

          </button>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="text-left px-6 py-4">
                ID
              </th>

              <th className="text-left px-6 py-4">
                Name
              </th>

              <th className="text-left px-6 py-4">
                Station
              </th>

              <th className="text-left px-6 py-4">
                Email
              </th>

              <th className="text-left px-6 py-4">
                Phone
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

            {supervisors.map((supervisor) => (

              <tr
                key={supervisor.id}
                className="border-t border-slate-100 hover:bg-slate-50 transition"
              >

                <td className="px-6 py-4 font-medium">
                  {supervisor.id}
                </td>

                <td className="px-6 py-4">
                  {supervisor.name}
                </td>

                <td className="px-6 py-4">
                  {supervisor.station}
                </td>

                <td className="px-6 py-4">
                  {supervisor.email}
                </td>

                <td className="px-6 py-4">
                  {supervisor.phone}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      supervisor.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {supervisor.status}
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