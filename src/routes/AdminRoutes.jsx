import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";

import Dashboard from "@/pages/admin/Dashboard";
import ManageUsers from "@/pages/admin/ManageUsers";
import ManageStations from "@/pages/admin/ManageStations";
import ManageSupervisors from "@/pages/admin/ManageSupervisors";
import Analytics from "@/pages/admin/Analytics";
import Reports from "@/pages/admin/Reports";
import Settings from "@/pages/admin/Settings";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="manage-stations" element={<ManageStations />} />
        <Route path="manage-supervisors" element={<ManageSupervisors />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}