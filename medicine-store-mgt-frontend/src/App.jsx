// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";

import { useDispatch } from "react-redux";

import { allMedicines } from "./components/dashboard/features/allMedicineSlice";

import "./assets/index.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMedicines());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="bg-white pt-4 px-2 sm:px-4">
        <div className="container mx-auto pt-0 pb-3 md:pb-0 sm:pt-3 mt-[60px]">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
