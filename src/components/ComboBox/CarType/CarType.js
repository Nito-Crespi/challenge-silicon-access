//src/components/ComboBox/CarType/CarType.js

import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import ComboBox from "../ComboBox";

const CarType = React.memo(({ setCarTypeSelected }) => {
  const { catalogData } = useContext(AppContext);

  const carTypes = catalogData.carTypes;

  const uniqueNames = [...new Set(carTypes.map((item) => item.name))];

  const handleSelect = (select) => {
    const selectedItem = carTypes.find((item) => item.name === select);
    setCarTypeSelected(selectedItem || null);
  };

  // console.log("CarType:");
  // console.log(uniqueNames);

  return (
    <>
      <ComboBox
        placeholder=" tipo de vehículo"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
});

export default CarType;
