//src/components/ComboBox/CarBrand/CarBrand.js

import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import ComboBox from "../ComboBox";

const CarBrand = React.memo(({ setCarBrandSelected }) => {
  const { catalogData } = useContext(AppContext);

  const carBrands = catalogData.carBrands;

  const uniqueNames = [
    ...new Set(carBrands.map((item) => capitalizeWords(item.name))),
  ];

  // console.log("CarBrand:");
  // console.log(uniqueNames);

  const handleSelect = (select) => {
    const selectedItem = carBrands.find(
      (item) => capitalizeWords(item.name) === select,
    );
    setCarBrandSelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder="a marca de vehículo"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
});

export default CarBrand;
