import React from "react";
import {
  TrendingUp,
  Users,
  Briefcase,
  IndianRupee,
} from "lucide-react";

import AdminStatsCard from "@/components/admin/AdminStatsCard";

export default function Analytics() {
  return (
    <div className="space-y-6">

      {/* =======================
          Top Statistics
      ======================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <AdminStatsCard
          title="Total Bookings"
          value="14,280"
          subtitle="This Month"
          icon={<Briefcase size={28} />}
          iconBg="bg-blue-50"
          iconColor="text-blue-900"
        />

        <AdminStatsCard
          title="Revenue"
          value="₹12.6L"
          subtitle="Monthly Earnings"
          icon={<IndianRupee size={28} />}
          iconBg="bg-green-50"
          iconColor="text-green-700"
        />

        <AdminStatsCard
          title="New Users"
          value="2,346"
          subtitle="Last 30 Days"
          icon={<Users size={28} />}
          iconBg="bg-yellow-50"
          iconColor="text-yellow-700"
        />

        <AdminStatsCard
          title="Growth Rate"
          value="+18%"
          subtitle="Compared to Last Month"
          icon={<TrendingUp size={28} />}
          iconBg="bg-purple-50"
          iconColor="text-purple-700"
        />

      </div>

      {/* =======================
          Charts Section
      ======================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left */}

        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-blue-900 mb-5">
            Booking Growth
          </h2>

          <div className="h-80 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-center">

            <span className="text-slate-400 text-lg">
              Booking Trend Chart
            </span>

          </div>

        </div>

        {/* Right */}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-blue-900 mb-5">
            Service Distribution
          </h2>

          <div className="h-80 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-center">

            <span className="text-slate-400 text-lg">
              Pie Chart
            </span>

          </div>

        </div>

      </div>

      {/* =======================
          Bottom Cards
      ======================== */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Top Stations */}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-blue-900 mb-5">
            Top Performing Stations
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Ahmedabad Junction</span>

              <span className="font-semibold text-blue-900">
                1,245 Bookings
              </span>

            </div>

            <div className="flex justify-between">

              <span>Surat Junction</span>

              <span className="font-semibold text-blue-900">
                1,108 Bookings
              </span>

            </div>

            <div className="flex justify-between">

              <span>Vadodara Junction</span>

              <span className="font-semibold text-blue-900">
                962 Bookings
              </span>

            </div>

            <div className="flex justify-between">

              <span>Rajkot Junction</span>

              <span className="font-semibold text-blue-900">
                815 Bookings
              </span>

            </div>

          </div>

        </div>

        {/* User Growth */}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-blue-900 mb-5">
            User Growth Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Registered Users</span>

              <span className="font-semibold">
                24,560
              </span>

            </div>

            <div className="flex justify-between">

              <span>Active Users</span>

              <span className="font-semibold text-green-700">
                18,240
              </span>

            </div>

            <div className="flex justify-between">

              <span>Inactive Users</span>

              <span className="font-semibold text-red-600">
                6,320
              </span>

            </div>

            <div className="flex justify-between">

              <span>Growth This Month</span>

              <span className="font-semibold text-blue-900">
                +18%
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}