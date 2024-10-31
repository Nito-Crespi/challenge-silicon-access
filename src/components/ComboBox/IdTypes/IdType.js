//src/components/ComboBox/IdType/IdType.js

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import useCarInsuranceSelection from "../../../hooks/useCarInsuranceSelection";
import ComboBox from "../ComboBox";

const IdType = () => {
  const { countrySelected, setIdTypeSelected } = useCarInsuranceSelection();

  const { catalogData } = useContext(AppContext);

  const idTypes = catalogData.idTypes.sort(
    (a, b) => a.display_order - b.display_order,
  );

  const idTypeByCountrySelected = idTypes.filter(
    (idType) => countrySelected && idType.country === countrySelected.code,
  );

  const uniqueNames = [
    ...new Set(idTypeByCountrySelected.map((item) => item.name)),
  ];

  const handleSelect = (select) => {
    const selectedItem = idTypes.find((item) => item.name === select);
    setIdTypeSelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" tipo de documento"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
};

export default IdType;
