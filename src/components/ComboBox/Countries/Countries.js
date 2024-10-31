//src/components/Countries/Countries.js

import useCarInsuranceSelection from "../../../hooks/useCarInsuranceSelection";
import ComboBox from "../ComboBox";

const Countries = () => {
  const { setCountrySelected } = useCarInsuranceSelection();

  const countries = [
    { name: "Argentina", code: "AR" },
    { name: "Bolivia", code: "BO" },
    { name: "Brasil", code: "BR" },
    { name: "Chile", code: "CH" },
    { name: "Paraguay", code: "PA" },
  ];

  const uniqueCodes = [...new Set(countries.map((item) => item.name))];

  const handleSelect = (select) => {
    const selectedItem = countries.find((item) => item.name === select);
    setCountrySelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" país"
        options={uniqueCodes}
        onSelect={handleSelect}
      />
    </>
  );
};

export default Countries;
