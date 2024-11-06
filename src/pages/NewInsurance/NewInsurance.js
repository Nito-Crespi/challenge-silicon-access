//src/pages/NewInsurance/NewInsurance.js

import { useContext, useEffect } from "react";
import CarBrand from "../../components/ComboBox/CarBrand/CarBrand";
import CarColor from "../../components/ComboBox/CarColor/CarColor";
import CarInsuranceForm from "../../components/ComboBox/CarInsuranceForm";
import CarModel from "../../components/ComboBox/CarModel/CarModel";
import CarType from "../../components/ComboBox/CarType/CarType";
import Countries from "../../components/ComboBox/Countries/Countries";
import IdTypesComboBox from "../../components/ComboBox/IdTypes/IdType";
import InsuranceComboBox from "../../components/ComboBox/Insurance/Insurance";
import { AppContext } from "../../context/AppContext";
import useCarInsuranceSelection from "../../hooks/useCarInsuranceSelection";

const NewInsurance = () => {
  const {
    countrySelected,
    carTypeSelected,
    carBrandSelected,
    setCountrySelected,
    setInsuranceSelected,
    setIdTypeSelected,
    setCarTypeSelected,
    setCarModelSelected,
    setCarBrandSelected,
    setCarColorSelected,
  } = useCarInsuranceSelection();

  const { userInfo } = useContext(AppContext);

  // useEffect(() => {
  //   console.log("---");
  // }, []);

  return (
    <>
      {userInfo ? (
        <div className="h-full w-full bg-eigengrau bg-opacity-70 p-3">
          <h1 className="pb-3 text-center text-2xl text-primary-cip">
            Nuevo seguro
          </h1>
          <hr />
          <div className="flex">
            <div className="w-1/2 p-2 [&>*]:p-1">
              <h2 className="p-1 text-xl text-primary-cip">Datos del seguro</h2>

              <h1>Seleccione un país:</h1>
              <div className="h-12 w-96">
                <Countries setCountrySelected={setCountrySelected} />
              </div>

              <h1>Tipo de documento:</h1>
              <div className="h-12 w-96">
                {
                  <IdTypesComboBox
                    countrySelected={countrySelected}
                    setIdTypeSelected={setIdTypeSelected}
                  />
                }
              </div>

              <h1>Proveedor de seguro:</h1>
              <div className="h-12 w-96">
                {
                  <InsuranceComboBox
                    countrySelected={countrySelected}
                    setInsuranceSelected={setInsuranceSelected}
                  />
                }
              </div>
            </div>

            <div className="w-1/2 p-2 [&>*]:p-1">
              <h2 className="p-1 text-xl text-primary-cip">
                Datos del vehículo
              </h2>

              <h1>Tipo de vehículo:</h1>
              <div className="h-12 w-96">
                {<CarType setCarTypeSelected={setCarTypeSelected} />}
              </div>

              <h1>Modelo del vehículo:</h1>
              <div className="h-12 w-96">
                {<CarBrand setCarBrandSelected={setCarBrandSelected} />}
              </div>

              <h1>Marca del vehículo:</h1>
              <div className="h-12 w-96">
                {
                  <CarModel
                    carBrandSelected={carBrandSelected}
                    setCarModelSelected={setCarModelSelected}
                  />
                }
              </div>

              <h1>Color de vehículo:</h1>
              <div className="h-12 w-96">
                {<CarColor setCarColorSelected={setCarColorSelected} />}
              </div>
            </div>
          </div>
          {carTypeSelected ? (
            <>
              <hr />
              <h2 className="p-1 text-xl text-primary-cip">
                Especificaciones del vehículo
              </h2>
              <div className="flex p-2 [&>*]:px-2">
                <img
                  className="h-32"
                  src={carTypeSelected.url_image}
                  alt="Logo del vehículo seleccionado"
                />
                {carTypeSelected.need_weighing !== "NO" ? (
                  <>
                    <p className="text-primary-text">
                      <span>Máximo peso: {carTypeSelected.max_weight} kg</span>
                      <br />
                      <span>
                        Peso máximo de tolerancia:{" "}
                        {carTypeSelected.max_tolerance_weight} kg
                      </span>
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
          <div>{/* <CarInsuranceForm /> */}</div>
          <hr />
        </div>
      ) : (
        <p>No hay información del cliente disponible.</p>
      )}
    </>
  );
};

export default NewInsurance;
