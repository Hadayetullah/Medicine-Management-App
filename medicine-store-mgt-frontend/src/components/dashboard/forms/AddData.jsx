import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addNewData,
  setError,
  setLoading,
  setSuccessMsg,
} from "../features/allMedicineSlice";

const AddData = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    companyName: "",
    categoryName: "",
    medicineName: "",
    medicinePrice: "",
    medicinePower: "",
  });

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
      company_name: { name: formData.companyName },
      medicine_category: { name: formData.categoryName },
      medicine_name: formData.medicineName,
      medicine_price: parseFloat(formData.medicinePrice),
      medicine_power: parseFloat(formData.medicinePower),
    };

    try {
      const response = await axios.post(
        "https://hadayetullah003.pythonanywhere.com/api/medicine/medicines/",
        data
      );

      dispatch(setLoading(false));
      dispatch(setSuccessMsg("Data updated successfully!"));
      dispatch(addNewData(response.data));
      setFormData({
        companyName: "",
        categoryName: "",
        medicineName: "",
        medicinePrice: "",
        medicinePower: "",
      });
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
    <div className="">
      <h2 className="font-semibold border-b text-lg">
        Insert company, category, medicine name & price
      </h2>
      <form className="flex flex-col py-3 gap-2" onSubmit={handleSubmit}>
        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="categoryName"
            placeholder="Enter category/brand name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.categoryName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name="medicineName"
            placeholder="Enter medicine name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.medicineName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            name="medicinePrice"
            placeholder="Enter price"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.medicinePrice}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="medicinePower"
            placeholder="Enter medicine power/strength"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.medicinePower}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 font-bold"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddData;
