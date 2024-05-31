import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditModal,
  setError,
  setUpdatedData,
  setSuccessMsg,
  setUpdatedListedData,
  setUpdatedFilteredData,
  setUpdatedSearchedData,
  compareAndUpdateSearchedData,
  setLoading,
} from "../features/allMedicineSlice";
import axios from "axios";

const Edit = () => {
  const dispatch = useDispatch();

  const { selectedMedicine, editModal, currentMedicineListStatus } =
    useSelector((state) => state.allMedicines);

  const [formData, setFormData] = useState({
    companyName: "",
    categoryName: "",
    medicineName: "",
    medicinePrice: "",
    medicinePower: "",
  });

  useEffect(() => {
    if (selectedMedicine !== null) {
      setFormData({
        companyName: selectedMedicine.company_name.name,
        categoryName: selectedMedicine.medicine_category.name,
        medicineName: selectedMedicine.medicine_name,
        medicinePrice: selectedMedicine.medicine_price,
        medicinePower: selectedMedicine.medicine_power,
      });
    }
  }, [selectedMedicine]);

  const handleEditForm = () => {
    dispatch(setEditModal(!editModal));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    dispatch(setLoading(true));
    e.preventDefault();

    const data = {
      id: selectedMedicine.id,
      company_name: { name: formData.companyName },
      medicine_category: { name: formData.categoryName },
      medicine_name: formData.medicineName,
      medicine_price: parseFloat(formData.medicinePrice),
      medicine_power: parseFloat(formData.medicinePower),
    };

    try {
      const response = await axios.put(
        `https://hadayetullah003.pythonanywhere.com/api/medicine/medicines/${data.id}/`,
        data
      );

      const responseData = await response.data;
      dispatch(setLoading(false));
      dispatch(setSuccessMsg("Data updated successfully!"));

      if (currentMedicineListStatus === "all") {
        dispatch(setUpdatedData(responseData));
        dispatch(setUpdatedListedData(responseData));
        dispatch(compareAndUpdateSearchedData());
      } else if (currentMedicineListStatus === "filtered") {
        dispatch(setUpdatedData(responseData));
        dispatch(setUpdatedFilteredData(responseData));
        dispatch(compareAndUpdateSearchedData());
      } else if (currentMedicineListStatus === "searched") {
        dispatch(setUpdatedData(responseData));
        dispatch(setUpdatedSearchedData(responseData));
      }

      dispatch(setEditModal(!editModal));
    } catch (error) {
      dispatch(setLoading(false));
      if (error.response) {
        const errorMsg = error.response.data.non_field_errors
          ? error.response.data.non_field_errors[0]
          : "Something went wrong";
        dispatch(setError(errorMsg));
      } else if (error.request) {
        dispatch(
          setError("No response from the server. Please try again later.")
        );
      } else {
        dispatch(setError("Error: " + error.message));
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-10 w-full bg-[#00000080] items-center justify-center transition`}
      style={{ display: `${editModal ? "flex" : "none"}` }}
    >
      <div className="min-w-[180px] max-w-[500px] bg-white rounded-sm p-4 relative m-3">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute right-3 top-2 cursor-pointer"
          onClick={() => handleEditForm()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <h2 className="font-bold border-b text-lg mt-2">Edit data</h2>
        <form
          className="w-full flex flex-col gap-2 py-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-row gap-2">
            <div className="w-full">
              <label htmlFor="companyName">Company name</label>
              <input
                type="text"
                name="companyName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="categoryName">Category/Brand name</label>
              <input
                type="text"
                name="categoryName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.categoryName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full">
              <label htmlFor="medicineName">Medicine name</label>
              <input
                type="text"
                name="medicineName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.medicineName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-row gap-2">
            <div className="w-full">
              <label htmlFor="medicinePrice">Medicine Price</label>
              <input
                type="text"
                name="medicinePrice"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.medicinePrice}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="medicinePower">Medicine power/strenght</label>
              <input
                type="text"
                name="medicinePower"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.medicinePower}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="w-[200px] text-white p-2 rounded-md font-bold bg-green-500 hover:bg-green-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
