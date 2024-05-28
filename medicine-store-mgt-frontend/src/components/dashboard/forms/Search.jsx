import React, { useRef } from "react";

const Search = () => {
  const handleIconClick = () => {
    const input = document.getElementById("search-input");
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="min-w-[100px] max-w-[500px] h-[46px] flex justify-center mt-4 mx-auto relative">
      <input
        type="text"
        placeholder="Search by Medicine Name"
        className="w-full max-w-lg p-2 border border-gray-300 rounded-md absolute h-full"
        id="search-input"
      />

      <div
        onClick={handleIconClick}
        className="absolute right-2 top-1 text-gray-300 cursor-text z-10 flex h-[40px] bg-white w-[40px] items-center justify-center"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-2">
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
