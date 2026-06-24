import { Routes, Route } from "react-router-dom";
import SupervisorLayout from "@/layouts/SupervisorLayout";

import Dashboard from "@/pages/supervisor/Dashboard";
import IncomingRequests from "@/pages/supervisor/IncomingRequests";
import RegisteredPorters from "@/pages/supervisor/RegisteredPorters";
import ActiveJobs from "@/pages/supervisor/ActiveJobs";
import ServiceHistory from "@/pages/supervisor/ServiceHistory";
import Settings from "@/pages/supervisor/Settings";

export default function SupervisorRoutes() {
  return (
    <Routes>
      <Route element={<SupervisorLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="incoming-requests" element={<IncomingRequests />} />
        <Route path="registered-porters" element={<RegisteredPorters />} />
        <Route path="active-jobs" element={<ActiveJobs />} />
        <Route path="service-history" element={<ServiceHistory />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}