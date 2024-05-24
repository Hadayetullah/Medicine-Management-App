import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProjectDetails from "../pages/ProjectDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/project-details" element={<ProjectDetails />} />
    </Routes>
  );
};

export default AppRoutes;
