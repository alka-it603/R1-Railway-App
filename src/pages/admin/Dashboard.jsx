import React from "react";
import {
  Users,
  Building2,
  UserCog,
  IndianRupee,
} from "lucide-react";

import AdminStatsCard from "@/components/admin/AdminStatsCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Top Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <AdminStatsCard
          title="Total Users"
          value="12,450"
          subtitle="Registered Passengers"
          icon={<Users size={30} />}
          iconBg="bg-blue-50"
          iconColor="text-blue-900"
        />

        <AdminStatsCard
          title="Active Stations"
          value="26"
          subtitle="Connected Stations"
          icon={<Building2 size={30} />}
          iconBg="bg-green-50"
          iconColor="text-green-700"
        />

        <AdminStatsCard
          title="Supervisors"
          value="82"
          subtitle="Currently Active"
          icon={<UserCog size={30} />}
          iconBg="bg-yellow-50"
          iconColor="text-yellow-700"
        />

        <AdminStatsCard
          title="Revenue"
          value="₹8.4L"
          subtitle="Current Month"
          icon={<IndianRupee size={30} />}
          iconBg="bg-purple-50"
          iconColor="text-purple-700"
        />

      </div>

      {/* Middle Section */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Analytics */}

        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Booking Analytics
          </h2>

          <div className="h-72 flex items-center justify-center rounded-xl bg-slate-50 border border-dashed border-slate-300">

            <p className="text-slate-400 text-lg">
              Analytics Chart Placeholder
            </p>

          </div>

        </div>

        {/* System Overview */}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-blue-900 mb-5">
            System Overview
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">

              <span className="text-slate-500">
                Active Bookings
              </span>

              <span className="font-semibold text-blue-900">
                342
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Completed Today
              </span>

              <span className="font-semibold text-green-700">
                210
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Pending Requests
              </span>

              <span className="font-semibold text-orange-600">
                27
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Cancelled
              </span>

              <span className="font-semibold text-red-600">
                6
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

        <h2 className="text-xl font-semibold text-blue-900 mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">

            <span>User Rahul Sharma registered successfully.</span>

            <span className="text-slate-400 text-sm">
              2 mins ago
            </span>

          </div>

          <div className="flex justify-between border-b pb-3">

            <span>Ahmedabad Supervisor updated station data.</span>

            <span className="text-slate-400 text-sm">
              10 mins ago
            </span>

          </div>

          <div className="flex justify-between border-b pb-3">

            <span>Revenue report generated.</span>

            <span className="text-slate-400 text-sm">
              35 mins ago
            </span>

          </div>

          <div className="flex justify-between">

            <span>New station added to the network.</span>

            <span className="text-slate-400 text-sm">
              1 hour ago
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}