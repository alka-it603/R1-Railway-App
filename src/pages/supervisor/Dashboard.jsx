import React from "react";
import {
  Users,
  Briefcase,
  Clock,
  CheckCircle,
} from "lucide-react";

import StatsCard from "@/components/supervisor/StatsCard";
import RecentRequestsTable from "@/components/supervisor/RecentRequestsTable";
import VolumeTrends from "@/components/supervisor/VolumeTrends";
import AvailabilityCard from "@/components/supervisor/AvailabilityCard";
import ActiveJobsPreview from "@/components/supervisor/ActiveJobsPreview";

export default function Dashboard() {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Registered Coolies"
          value="124"
          subtitle="Currently Registered"
          icon={<Users className="text-blue-700" size={28} />}
        />

        <StatsCard
          title="Active Jobs"
          value="42"
          subtitle="Running Right Now"
          icon={<Briefcase className="text-green-600" size={28} />}
        />

        <StatsCard
          title="Pending Requests"
          value="18"
          subtitle="3 High Priority"
          icon={<Clock className="text-yellow-600" size={28} />}
        />

        <StatsCard
          title="Completed Today"
          value="215"
          subtitle="+12% from Yesterday"
          icon={<CheckCircle className="text-purple-600" size={28} />}
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-2">
          <RecentRequestsTable />
        </div>

        <div className="space-y-6">
          <VolumeTrends />
          <AvailabilityCard />
        </div>
      </div>

      {/* Bottom Section */}
      <ActiveJobsPreview />
    </>
  );
}