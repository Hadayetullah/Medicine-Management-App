import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../dashboard/features/allMedicineSlice";

const ErrorMsg = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.allMedicines);

  useEffect(() => {
    if (error !== "") {
      const timer = setTimeout(() => {
        dispatch(setError(""));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div
      className="w-full items-center justify-center fixed z-20 top-[100px] left-0"
      style={{ display: `${error !== "" ? "flex" : "none"}` }}
    >
      <div className="mt-2 p-2 bg-red-300 text-red-900 rounded-md">{error}</div>
    </div>
  );
};

export default ErrorMsg;
