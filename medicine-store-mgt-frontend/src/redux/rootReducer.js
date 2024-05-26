// src/app/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import allMedicinesReducer from "../components/dashboard/features/allMedicineSlice";

const rootReducer = combineReducers({
  allMedicines: allMedicinesReducer,
});

export default rootReducer;
