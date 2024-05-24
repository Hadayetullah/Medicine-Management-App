import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../redux/features/featureNameSlice";

const FeatureComponent = () => {
  const data = useSelector((state) => state.featureName.data);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(setData(["New Data"]));
  };

  return (
    <div>
      <h1>Feature Component</h1>
      <button onClick={handleUpdate}>Update Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureComponent;
