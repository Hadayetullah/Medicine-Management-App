import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk for fetching medicines
export const allMedicines = createAsyncThunk(
  "medicines/allMedicines",
  async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/medicine/medicines/"
    );
    const data = response.data;
    return data;
  }
);

// Define an async thunk for deleting a medicine
export const deleteMedicine = createAsyncThunk(
  "medicines/deleteMedicine",
  async (id) => {
    await fetch(`http://127.0.0.1:8000/api/medicine/medicines/${id}/`, {
      method: "DELETE",
    });
    return id;
  }
);

const allMedicineSlice = createSlice({
  name: "getAllMedicines",
  initialState: {
    loading: false,
    getAllMedicines: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allMedicines.pending, (state) => {
        state.loading = true;
      })
      .addCase(allMedicines.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllMedicines = action.payload;
      })
      .addCase(allMedicines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMedicine.fulfilled, (state, action) => {
        state.getAllMedicines = state.getAllMedicines.filter(
          (medicine) => medicine.id !== action.payload
        );
      });
  },
});

export default allMedicineSlice.reducer;
