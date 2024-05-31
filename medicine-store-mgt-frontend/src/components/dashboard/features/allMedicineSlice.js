import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk for fetching medicines
export const allMedicines = createAsyncThunk(
  "medicines/allMedicines",
  async () => {
    const response = await axios.get(
      "https://hadayetullah003.pythonanywhere.com/api/medicine/medicines/"
    );
    const data = response.data;
    return data;
  }
);

// Define an async thunk for deleting a medicine
export const deleteMedicine = async (id) => {
  try {
    const response = await fetch(
      `https://hadayetullah003.pythonanywhere.com/api/medicine/medicines/${id}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return response;
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
};

const allMedicineSlice = createSlice({
  name: "getAllMedicines",
  initialState: {
    loading: false,
    // getAllMedicines: [],
    dispalyAllMedicines: [],
    searchedMedicines: [],
    filteredMedicines: [],
    currentMedicineListStatus: "all",
    error: "",
    successMsg: "",
    selectedMedicine: null,
    editModal: false,
    updatedData: {},
  },
  reducers: {
    setSelectedMedicine: (state, action) => {
      state.selectedMedicine = action.payload;
    },
    setEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    setUpdatedData: (state, action) => {
      state.updatedData[action.payload.id] = action.payload;
    },
    setUpdatedListedData: (state, action) => {
      const index = state.dispalyAllMedicines.findIndex(
        (medicine) => medicine.id === action.payload.id
      );

      if (index !== -1) {
        state.dispalyAllMedicines[index] = action.payload;
      }
    },

    setUpdatedFilteredData: (state, action) => {
      const index = state.filteredMedicines.findIndex(
        (medicine) => medicine.id === action.payload.id
      );

      if (index !== -1) {
        state.filteredMedicines[index] = action.payload;
      }
    },

    setUpdatedSearchedData: (state, action) => {
      const index = state.searchedMedicines.findIndex(
        (medicine) => medicine.id === action.payload.id
      );

      if (index !== -1) {
        state.searchedMedicines[index] = action.payload;
      }
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    addNewData: (state, action) => {
      state.dispalyAllMedicines.push(action.payload);
    },
    displayFilteredMedicines: (state, action) => {
      state.filteredMedicines = action.payload;
    },
    setCurrentMedicineListStatus: (state, action) => {
      state.currentMedicineListStatus = action.payload;
    },
    setSearchedMedicines: (state, action) => {
      state.currentMedicineListStatus = "searched";
      state.searchedMedicines = action.payload;
    },
    setSuccessMsg: (state, action) => {
      state.successMsg = action.payload;
    },
    compareAndUpdateListData: (state, action) => {
      const updatedData = state.updatedData;
      if (Object.keys(updatedData).length > 0) {
        state.dispalyAllMedicines = state.dispalyAllMedicines.map((item) =>
          updatedData[item.id] ? updatedData[item.id] : item
        );
      }
    },
    compareAndUpdateFilteredData: (state, action) => {
      const updatedData = state.updatedData;
      if (Object.keys(updatedData).length > 0) {
        state.filteredMedicines = state.filteredMedicines.map((item) =>
          updatedData[item.id] ? updatedData[item.id] : item
        );
      }
    },
    compareAndUpdateSearchedData: (state, action) => {
      const updatedData = state.updatedData;
      if (Object.keys(updatedData).length > 0) {
        state.searchedMedicines = state.searchedMedicines.map((item) =>
          updatedData[item.id] ? updatedData[item.id] : item
        );
      }
    },

    deleteListData: (state, action) => {
      state.dispalyAllMedicines = state.dispalyAllMedicines.filter(
        (item) => item.id !== action.payload
      );
    },

    deleteFilteredData: (state, action) => {
      state.filteredMedicines = state.filteredMedicines.filter(
        (item) => item.id !== action.payload
      );
    },

    deleteSearchedData: (state, action) => {
      state.searchedMedicines = state.searchedMedicines.filter(
        (item) => item.id !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(allMedicines.pending, (state) => {
        state.loading = true;
      })
      .addCase(allMedicines.fulfilled, (state, action) => {
        state.loading = false;
        state.dispalyAllMedicines = action.payload;
        state.currentMedicineListStatus = "all";
      })
      .addCase(allMedicines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
  setCurrentMedicineListStatus,
  setSearchedMedicines,
  setSuccessMsg,
  setUpdatedListedData,
  setUpdatedFilteredData,
  setUpdatedSearchedData,
  compareAndUpdateListData,
  compareAndUpdateFilteredData,
  compareAndUpdateSearchedData,
  deleteListData,
  deleteFilteredData,
  deleteSearchedData,
  setLoading,
} = allMedicineSlice.actions;
export default allMedicineSlice.reducer;
