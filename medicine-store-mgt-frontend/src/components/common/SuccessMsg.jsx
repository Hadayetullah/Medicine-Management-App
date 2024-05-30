import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessMsg } from "../dashboard/features/allMedicineSlice";

const SuccessMsg = () => {
  const dispatch = useDispatch();
  const { successMsg } = useSelector((state) => state.allMedicines);

  useEffect(() => {
    if (successMsg !== "") {
      const timer = setTimeout(() => {
        dispatch(setSuccessMsg(""));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  return (
    <div
      className="w-full flex items-center justify-center fixed z-20 top-[100px] left-0"
      style={{ display: `${successMsg !== "" ? "flex" : "none"}` }}
    >
      <div className="mt-2 p-2 bg-green-200 text-green-800 rounded-md">
        {successMsg}
      </div>
    </div>
  );
};

export default SuccessMsg;
