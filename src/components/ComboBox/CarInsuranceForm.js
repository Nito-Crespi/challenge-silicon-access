//src/components/CarInsuranceForm/CarInsuranceForm.js

import React from "react";
import useCarInsuranceStore from "../../hooks/useCarInsuranceSelection";

const CarInsuranceForm = () => {
  const {
    countrySelected,
    insuranceSelected,
    idTypeSelected,
    carTypeSelected,
    carModelSelected,
    carBrandSelected,
    carColorSelected,
    // setCountrySelected,
    // setInsuranceSelected,
    // setIdTypeSelected,
    // setCarTypeSelected,
    // setCarModelSelected,
    // setCarBrandSelected,
    // setCarColorSelected,
  } = useCarInsuranceStore();

  return (
    <div className="h-64 overflow-y-scroll border border-gray-300 p-4">
      <h2>Información Seleccionada</h2>
      <br />

      {countrySelected && (
        <div>
          <h3>País Seleccionado</h3>
          <pre>{JSON.stringify(countrySelected, null, 2)}</pre>
        </div>
      )}

      {insuranceSelected && (
        <div>
          <h3>Seguro Seleccionado</h3>
          <pre>{JSON.stringify(insuranceSelected, null, 2)}</pre>
        </div>
      )}

      {idTypeSelected && (
        <div>
          <h3>Tipo de ID Seleccionado</h3>
          <pre>{JSON.stringify(idTypeSelected, null, 2)}</pre>
        </div>
      )}

      {carTypeSelected && (
        <div>
          <h3>Tipo de Vehículo Seleccionado</h3>
          <pre>{JSON.stringify(carTypeSelected, null, 2)}</pre>
        </div>
      )}

      {carModelSelected && (
        <div>
          <h3>Modelo de Vehículo Seleccionado</h3>
          <pre>{JSON.stringify(carModelSelected, null, 2)}</pre>
        </div>
      )}

      {carBrandSelected && (
        <div>
          <h3>Marca de Vehículo Seleccionada</h3>
          <pre>{JSON.stringify(carBrandSelected, null, 2)}</pre>
        </div>
      )}

      {carColorSelected && (
        <div>
          <h3>Color de Vehículo Seleccionado</h3>
          <pre>{JSON.stringify(carColorSelected, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CarInsuranceForm;
