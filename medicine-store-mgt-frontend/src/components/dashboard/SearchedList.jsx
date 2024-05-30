import { useDispatch, useSelector } from "react-redux";
import {
  deleteFilteredData,
  deleteListData,
  deleteMedicine,
  deleteSearchedData,
  setCurrentMedicineListStatus,
  setEditModal,
  setError,
  setSelectedMedicine,
  setSuccessMsg,
} from "./features/allMedicineSlice";
import { useEffect } from "react";

const SearchedList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentMedicineListStatus("searched"));
  }, []);

  const { loading, searchedMedicines, error, editModal } = useSelector(
    (state) => state.allMedicines
  );

  const handleDelete = async (id) => {
    try {
      const response = await deleteMedicine(id);
      if (response.status === 204) {
        dispatch(deleteListData(id));
        dispatch(deleteFilteredData(id));
        dispatch(deleteSearchedData(id));
        dispatch(setSuccessMsg("Medicine deleted successfully"));
      }
    } catch (error) {
      dispatch(setError(`Failed to delete medicine: ${error.message}`));
    }
  };

  const handleEditForm = (medicine) => {
    dispatch(setSelectedMedicine(medicine));
    dispatch(setEditModal(!editModal));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mb-5">
      <div
        className="overflow-x-auto overflow-y-hidden w-full h-full"
        style={{ scrollbarWidth: "thin", zIndex: "-1" }}
      >
        <div className="min-w-[900px] max-w-full">
          <div className="h-[40px] w-full bg-gray-100 font-bold text-xs md:text-sm text-gray-500 flex flex-row pl-1 sm:pl-2.5 pr-4">
            <div className="w-[12%] h-full flex items-center pl-2">
              <h4>Company</h4>
            </div>

            <div className="w-[14%] h-full flex items-center pl-1">
              <h4>Brand/Category</h4>
            </div>

            <div className="w-[14%] h-full flex items-center pl-1">
              <h4>Medicine Name</h4>
            </div>

            <div className="w-[7%] h-full flex items-center justify-center pl-1">
              <h4>Price</h4>
            </div>

            <div className="w-[12%] h-full flex items-center justify-center pl-1">
              <h4>Power/Strenght</h4>
            </div>

            <div className="w-[14%] h-full flex items-center pl-1">
              <h4>Created Time</h4>
            </div>

            <div className="w-[14%] h-full flex items-center pl-1">
              <h4>Modified Time</h4>
            </div>

            <div className="w-[13%] h-full flex items-center justify-center pl-1">
              <h4>Edit/Delete</h4>
            </div>
          </div>

          <div
            className="overflow-y-scroll overflow-x-hidden text-sm md:text-base w-full h-full bg-gray-100 pl-1 sm:pl-2.5"
            style={{ scrollbarWidth: "thin", zIndex: "-1" }}
          >
            <div className="w-full min-h-[60vh] max-h-[75vh] pb-5 bg-white">
              {searchedMedicines.length > 0 ? (
                <div className="w-full h-full">
                  {searchedMedicines.map((medicine) => {
                    const createdTime = new Date(medicine.created_at);
                    const createdTimeDay = createdTime.getDate();
                    const createdTimeMonth = createdTime.getMonth();
                    const createdTimeYear = createdTime.getFullYear();
                    const createdTimeHour = createdTime.getHours();
                    const createdTimeMin = createdTime.getMinutes();
                    const createdTimeSec = createdTime.getSeconds();

                    const createdWholeDate =
                      createdTimeDay +
                      " / " +
                      createdTimeMonth +
                      " / " +
                      createdTimeYear;

                    const createdWholeTime =
                      createdTimeHour +
                      " : " +
                      createdTimeMin +
                      " : " +
                      createdTimeSec;

                    const modifiedTime = new Date(medicine.modified_at);
                    const modifiedTimeDay = modifiedTime.getDate();
                    const modifiedTimeMonth = modifiedTime.getMonth();
                    const modifiedTimeYear = modifiedTime.getFullYear();
                    const modifiedTimeHour = modifiedTime.getHours();
                    const modifiedTimeMin = modifiedTime.getMinutes();
                    const modifiedTimeSec = modifiedTime.getSeconds();

                    const modifiedWholeDate =
                      modifiedTimeDay +
                      " / " +
                      modifiedTimeMonth +
                      " / " +
                      modifiedTimeYear;

                    const modifiedWholeTime =
                      modifiedTimeHour +
                      " : " +
                      modifiedTimeMin +
                      " : " +
                      modifiedTimeSec;

                    return (
                      <div
                        key={medicine.id}
                        className={`w-full h-full flex flex-row text-gray-500 ${
                          medicine.id % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        <div className="w-[12%] h-full flex my-1 items-center pl-2">
                          <h4>{medicine.company_name.name}</h4>
                        </div>

                        <div className="w-[14%] h-full flex my-1 items-center pl-1">
                          <h4>{medicine.medicine_category.name}</h4>
                        </div>

                        <div className="w-[14%] h-full flex my-1 items-center pl-1">
                          <h4>{medicine.medicine_name}</h4>
                        </div>

                        <div className="w-[7%] h-full flex my-1 pl-1 justify-center">
                          <h4>{medicine.medicine_price}</h4>
                        </div>

                        <div className="w-[12%] h-full flex my-1 items-center justify-center pl-1">
                          <h4>{medicine.medicine_power}</h4>
                        </div>

                        <div className="w-[14%] h-full flex my-1 flex-col pl-1">
                          <h4>{createdWholeDate}</h4>
                          <h4>{createdWholeTime}</h4>
                        </div>

                        <div className="w-[14%] h-full flex my-1 flex-col pl-1">
                          <h4>{modifiedWholeDate}</h4>
                          <h4>{modifiedWholeTime}</h4>
                        </div>

                        <div className="w-[13%] h-full flex my-1 flex-col pl-1 items-center gap-[3px]">
                          <button
                            className="w-full text-gray-900 bg-green-500 mr-1 rounded-md hover:bg-green-600"
                            onClick={() => handleEditForm(medicine)}
                          >
                            Edit
                          </button>
                          <button
                            className="w-full text-white bg-red-600 mr-1 rounded-md hover:bg-red-700"
                            onClick={() => handleDelete(medicine.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-[200px]">
                  <h4 className="text-lg text-gray-500 font-semibold">
                    No data available
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedList;
