//src/components/ComboBox/Insurance/Insurance.js

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import useCarInsuranceSelection from "../../../hooks/useCarInsuranceSelection";
import ComboBox from "../ComboBox";

const Insurance = () => {
  const { countrySelected, setInsuranceSelected } = useCarInsuranceSelection();

  const { catalogData } = useContext(AppContext);

  const insurances = catalogData.insurances.filter(
    (insurance) =>
      countrySelected && insurance.country === countrySelected.code,
  );

  const uniqueNames = [...new Set(insurances.map((item) => item.name))];

  const handleSelect = (select) => {
    const selectedItem = insurances.find((item) => item.name === select);
    setInsuranceSelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" proveedor de seguro"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
};

export default Insurance;
