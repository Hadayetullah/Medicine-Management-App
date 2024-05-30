import Filter from "../components/dashboard/forms/Filter";
import AddData from "../components/dashboard/forms/AddData";
import MedicineList from "../components/dashboard/MedicineList";
import { useDispatch, useSelector } from "react-redux";
import {
  compareAndUpdateFilteredData,
  compareAndUpdateListData,
  compareAndUpdateSearchedData,
  setCurrentMedicineListStatus,
} from "../components/dashboard/features/allMedicineSlice";
import FilteredList from "../components/dashboard/FilteredList";
import SearchedList from "../components/dashboard/SearchedList";
import Search from "../components/dashboard/forms/Search";

const Dashboard = () => {
  let displayList = null;
  const dispatch = useDispatch();
  const { currentMedicineListStatus } = useSelector(
    (state) => state.allMedicines
  );

  if (currentMedicineListStatus === "all") {
    displayList = <MedicineList />;
  } else if (currentMedicineListStatus === "filtered") {
    displayList = <FilteredList />;
  } else if (currentMedicineListStatus === "searched") {
    displayList = <SearchedList />;
  }

  const handleActiveMedicineListStatus = (payload) => {
    if (payload === "all") {
      dispatch(compareAndUpdateListData());
    } else if (payload === "filtered") {
      dispatch(compareAndUpdateFilteredData());
    } else if (payload === "searched") {
      dispatch(compareAndUpdateSearchedData());
    }

    dispatch(setCurrentMedicineListStatus(payload));
  };

  return (
    <div>
      <div className="w-full bg-white flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full border shadow-sm rounded-lg py-2 px-2">
          <AddData />
        </div>

        <div className="w-full border shadow-sm rounded-lg py-2 px-2">
          <Filter />
        </div>
      </div>

      <hr />
      <hr />
      <hr />

      <Search />

      <div className="min-w-[190px] max-w-[300px] flex flex-row items-center justify-center gap-3 mt-7 mb-2 mx-auto">
        <button
          onClick={() => handleActiveMedicineListStatus("all")}
          className={`hover:bg-blue-900 text-white w-full py-1 px-2 rounded-md ${
            currentMedicineListStatus === "all" ? "bg-blue-900" : "bg-blue-500"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleActiveMedicineListStatus("filtered")}
          className={`hover:bg-blue-900 text-white w-full py-1 px-2 rounded-md ${
            currentMedicineListStatus === "filtered"
              ? "bg-blue-900"
              : "bg-blue-500"
          }`}
        >
          Filtered
        </button>
        <button
          onClick={() => handleActiveMedicineListStatus("searched")}
          className={`hover:bg-blue-900 text-white w-full py-1 px-2 rounded-md ${
            currentMedicineListStatus === "searched"
              ? "bg-blue-900"
              : "bg-blue-500"
          }`}
        >
          Searched
        </button>
      </div>

      {displayList}
    </div>
  );
};

export default Dashboard;
