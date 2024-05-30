import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProjectOverview from "../pages/ProjectOverview";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/project-overview" element={<ProjectOverview />} />
    </Routes>
  );
};

export default AppRoutes;
