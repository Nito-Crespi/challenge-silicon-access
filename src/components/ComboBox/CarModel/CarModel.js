//src/components/ComboBox/CarModel/CarModel.js

import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import ComboBox from "../ComboBox";

const CarModel = React.memo(({ carBrandSelected, setCarModelSelected }) => {
  const { catalogData } = useContext(AppContext);

  const carModels = catalogData.carModels;

  const carModelsFiltered = carModels.filter(
    (carModel) =>
      carBrandSelected && carModel.brand_code === carBrandSelected.code,
  );

  const uniqueNames = [
    ...new Set(carModelsFiltered.map((item) => capitalizeWords(item.name))),
  ];

  // console.log("CarModel:");
  // console.log(uniqueNames);

  const handleSelect = (select) => {
    const selectedItem = carModelsFiltered.find(
      (item) => capitalizeWords(item.name) === select,
    );
    setCarModelSelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" modelo del vehiculo"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
});

export default CarModel;
