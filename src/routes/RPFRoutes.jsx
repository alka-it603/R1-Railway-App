import { Routes, Route } from "react-router-dom";

import RPFLayout from "@/layouts/RPFLayout";

import Dashboard from "@/pages/rpf/Dashboard";
import ActiveDeployments from "@/pages/rpf/ActiveDeployments";
import IncidentHistory from "@/pages/rpf/IncidentHistory";
import SOSAnalytics from "@/pages/rpf/SOSAnalytics";
import CommunicationCenter from "@/pages/rpf/CommunicationCenter";
import Settings from "@/pages/rpf/Settings";

export default function RPFRoutes() {
  return (
    <Routes>
      <Route element={<RPFLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        
        <Route
          path="active-deployments"
          element={<ActiveDeployments />}
        />
        <Route
          path="incident-history"
          element={<IncidentHistory />}
        />
        <Route path="analytics" element={<SOSAnalytics />} />
        <Route
          path="communication"
          element={<CommunicationCenter />}
        />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}