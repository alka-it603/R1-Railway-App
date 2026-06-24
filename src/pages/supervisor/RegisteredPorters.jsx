import React from "react";
import { Search, Filter, UserPlus } from "lucide-react";

const porters = [
  {
    id: "P001",
    name: "Ramesh Kumar",
    phone: "+91 9876543210",
    rating: 4.8,
    jobs: 15,
    status: "Available",
  },
  {
    id: "P002",
    name: "Suresh Patel",
    phone: "+91 9876543211",
    rating: 4.6,
    jobs: 11,
    status: "Busy",
  },
  {
    id: "P003",
    name: "Mahesh Yadav",
    phone: "+91 9876543212",
    rating: 4.9,
    jobs: 18,
    status: "Offline",
  },
];

export default function RegisteredPorters() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";

      case "Busy":
        return "bg-blue-100 text-blue-700";

      case "Offline":
        return "bg-slate-200 text-slate-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-6 flex flex-col lg:flex-row gap-4 justify-between">

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search porter..."
            className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-200"
          />

        </div>

        <button className="flex items-center gap-2 border border-slate-200 rounded-xl px-5 py-3 hover:bg-slate-50">

          <Filter size={18} />

          Filter

        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">Porter</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Rating</th>
              <th className="text-left p-4">Today's Jobs</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {porters.map((porter) => (

              <tr
                key={porter.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {porter.id}
                </td>

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-semibold">

                      {porter.name.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        {porter.name}
                      </h3>

                    </div>

                  </div>

                </td>

                <td className="p-4">
                  {porter.phone}
                </td>

                <td className="p-4">
                  ⭐ {porter.rating}
                </td>

                <td className="p-4">
                  {porter.jobs}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      porter.status
                    )}`}
                  >
                    {porter.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <button className="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800">

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