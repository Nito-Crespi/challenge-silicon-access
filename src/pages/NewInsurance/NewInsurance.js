//src/pages/NewInsurance/NewInsurance.js

import { useContext } from "react";
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
  const { carTypeSelected } = useCarInsuranceSelection();

  const { userInfo } = useContext(AppContext);

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
                <Countries />
              </div>

              <h1>Tipo de documento:</h1>
              <div className="h-12 w-96">{<IdTypesComboBox />}</div>

              <h1>Proveedor de seguro:</h1>
              <div className="h-12 w-96">{<InsuranceComboBox />}</div>
            </div>

            <div className="w-1/2 p-2 [&>*]:p-1">
              <h2 className="p-1 text-xl text-primary-cip">
                Datos del vehículo
              </h2>

              <h1>Tipo de vehículo:</h1>
              <div className="h-12 w-96">{<CarType />}</div>

              <h1>Modelo del vehículo:</h1>
              <div className="h-12 w-96">{<CarBrand />}</div>

              <h1>Marca del vehículo:</h1>
              <div className="h-12 w-96">{<CarModel />}</div>

              <h1>Color de vehículo:</h1>
              <div className="h-12 w-96">{<CarColor />}</div>
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
