import { createSlice } from "@reduxjs/toolkit";

const featureNameSlice = createSlice({
  name: "featureName",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = featureNameSlice.actions;

export default featureNameSlice.reducer;
