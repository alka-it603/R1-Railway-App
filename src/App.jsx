import React from "react";
import { Routes, Route } from "react-router-dom";

import UserRoutes from "@/routes/UserRoutes";
import SupervisorRoutes from "@/routes/SupervisorRoutes";
import AdminRoutes from "@/routes/AdminRoutes";
import RPFRoutes from "@/routes/RPFRoutes";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserRoutes />} />
      <Route path="/supervisor/*" element={<SupervisorRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/rpf/*" element={<RPFRoutes />} />
    </Routes>
  );
}