//src/components/ComboBox/CarType/CarType.js

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import useCarInsuranceSelection from "../../../hooks/useCarInsuranceSelection";
import ComboBox from "../ComboBox";

const CarType = () => {
  const { setCarTypeSelected } = useCarInsuranceSelection();

  const { catalogData } = useContext(AppContext);

  const carTypes = catalogData.carTypes;

  const uniqueNames = [...new Set(carTypes.map((item) => item.name))];

  const handleSelect = (select) => {
    const selectedItem = carTypes.find((item) => item.name === select);
    setCarTypeSelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" tipo de vehículo"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
};

export default CarType;
