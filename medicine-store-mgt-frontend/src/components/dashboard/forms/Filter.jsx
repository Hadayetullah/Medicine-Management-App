import React from "react";

const FilterForm = () => {
  return (
    <div className="">
      <h2 className="font-semibold border-b text-lg">
        Filter by company, category or prices
      </h2>
      <form className="w-full flex flex-col gap-2 py-3">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Enter category/brand name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            placeholder="Enter initial price"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <input
            type="text"
            placeholder="Enter end price"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 font-bold"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
