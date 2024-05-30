import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Loader = () => {
  const { loading } = useSelector((state) => state.allMedicines);
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 w-full bg-[#00000080] items-center justify-center transition`}
      style={{ display: `${loading ? "flex" : "none"}` }}
    >
      <div className="w-[190px] sm:w-[500px] h-[150px] sm:h-[250px] flex items-center justify-center bg-white rounded-sm">
        <div className="w-full h-full flex flex-col items-center justify-center m-2">
          <CirclesWithBar
            height="100"
            width="100"
            color="#1E3A8A"
            outerCircleColor="#1E3A8A"
            innerCircleColor="#1E3A8A"
            barColor="#1E3A8A"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />

          <h3 className="text-lg font-semibold pt-2">Please Wait</h3>
        </div>
      </div>
    </div>
  );
};

export default Loader;
