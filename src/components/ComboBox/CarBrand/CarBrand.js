//src/components/ComboBox/CarBrand/CarBrand.js

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import useCarInsuranceSelection from "../../../hooks/useCarInsuranceSelection";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import ComboBox from "../ComboBox";

const CarBrand = () => {
  const { setCarBrandSelected } = useCarInsuranceSelection();

  const { catalogData } = useContext(AppContext);

  const carBrands = catalogData.carBrands;

  const uniqueNames = [
    ...new Set(carBrands.map((item) => capitalizeWords(item.name))),
  ];

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
};

export default CarBrand;
