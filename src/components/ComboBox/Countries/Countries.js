//src/components/Countries/Countries.js

import React from "react";
import ComboBox from "../ComboBox";

const Countries = React.memo(({ setCountrySelected }) => {
  const countries = [
    { name: "Argentina", code: "AR" },
    { name: "Bolivia", code: "BO" },
    { name: "Brasil", code: "BR" },
    { name: "Chile", code: "CH" },
    { name: "Paraguay", code: "PA" },
  ];

  const uniqueNames = [...new Set(countries.map((item) => item.name))];

  // console.log("Countries:");
  // console.log(uniqueNames);

  const handleSelect = (select) => {
    const selectedItem = countries.find((item) => item.name === select);
    setCountrySelected(selectedItem || null);
  };

  return (
    <>
      <ComboBox
        placeholder=" país"
        options={uniqueNames}
        onSelect={handleSelect}
      />
    </>
  );
});

export default Countries;
