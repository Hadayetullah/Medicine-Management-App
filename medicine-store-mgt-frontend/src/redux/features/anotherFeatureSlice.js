// src/features/anotherFeature/anotherFeatureSlice.js
import { createSlice } from "@reduxjs/toolkit";

const anotherFeatureSlice = createSlice({
  name: "anotherFeature",
  initialState: {
    data: [],
  },
  reducers: {
    setAnotherData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAnotherData } = anotherFeatureSlice.actions;

export default anotherFeatureSlice.reducer;
