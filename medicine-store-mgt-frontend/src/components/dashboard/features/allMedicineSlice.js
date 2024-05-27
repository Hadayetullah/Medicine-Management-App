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
    selectedMedicine: null,
    editModal: false,
  },
  reducers: {
    setSelectedMedicine: (state, action) => {
      state.selectedMedicine = action.payload;
    },
    setEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    setUpdatedData: (state, action) => {
      const index = state.getAllMedicines.findIndex(action.payload.id);
      if (index !== -1) {
        state.getAllMedicines[index] = action.payload;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addNewData: (state, action) => {
      state.getAllMedicines.push(action.payload);
    },
    displayFilteredMedicines: (state, action) => {
      state.getAllMedicines = action.payload;
    },
  },
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

export const {
  setSelectedMedicine,
  setEditModal,
  setUpdatedData,
  setError,
  addNewData,
  displayFilteredMedicines,
} = allMedicineSlice.actions;
export default allMedicineSlice.reducer;
