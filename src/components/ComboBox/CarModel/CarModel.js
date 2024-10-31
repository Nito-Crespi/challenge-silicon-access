//src/components/ComboBox/CarModel/CarModel.js

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import useCarInsuranceSelection from "../../../hooks/useCarInsuranceSelection";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import ComboBox from "../ComboBox";

const CarModel = () => {
  const { carBrandSelected, setCarModelSelected } = useCarInsuranceSelection();

  const { catalogData } = useContext(AppContext);

  const carModels = catalogData.carModels;

  const carModelsFiltered = carModels.filter(
    (carModel) =>
      carBrandSelected && carModel.brand_code === carBrandSelected.code,
  );

  const uniqueNames = [
    ...new Set(carModelsFiltered.map((item) => capitalizeWords(item.name))),
  ];

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
};

export default CarModel;
