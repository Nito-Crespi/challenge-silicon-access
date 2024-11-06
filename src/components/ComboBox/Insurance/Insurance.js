//src/components/ComboBox/Insurance/Insurance.js

import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import ComboBox from "../ComboBox";

const Insurance = React.memo(({ countrySelected, setInsuranceSelected }) => {
  const { catalogData } = useContext(AppContext);

  const insurances = catalogData.insurances.filter(
    (insurance) =>
      countrySelected && insurance.country === countrySelected.code,
  );

  const uniqueNames = [...new Set(insurances.map((item) => item.name))];

  // console.log("Insurance:");
  // console.log(uniqueNames);

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
});

export default Insurance;
