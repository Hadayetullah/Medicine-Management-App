import React from "react";

const AddData = () => {
  return (
    <div className="">
      <h2 className="font-semibold border-b text-lg">
        Insert company, catergory, medicine name & price
      </h2>
      <form className="flex flex-col py-3 gap-2">
        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <input
            type="text"
            placeholder="Enter category/brand name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Enter medicine name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            placeholder="Enter price"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <input
            type="text"
            placeholder="Enter medicine power/strenght"
            className="w-full p-2 border border-gray-300 rounded-md"
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
