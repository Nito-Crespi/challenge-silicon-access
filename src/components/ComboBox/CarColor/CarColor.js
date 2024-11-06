//src/components/ComboBox/CarColor/CarColor.js

import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import ComboBox from "../ComboBox";

const CarColor = React.memo(({ setCarColorSelected }) => {
  const { catalogData } = useContext(AppContext);

  const carColors = catalogData.carColors;

  const uniqueNames = [
    ...new Set(carColors.map((item) => capitalizeWords(item.name))),
  ];

  // console.log("CarColor:");
  // console.log(uniqueNames);

  const handleSelect = (select) => {
    const selectedItem = carColors.find(
      (item) => capitalizeWords(item.name) === select,
    );
    setCarColorSelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" color de vehiculo"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
});

export default CarColor;
