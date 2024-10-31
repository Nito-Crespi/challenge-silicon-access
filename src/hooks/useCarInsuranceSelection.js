//src/hooks/useCarInsuranceStore.js

import { create } from "zustand";

const useCarInsuranceStore = create((set) => ({
  countrySelected: null,
  insuranceSelected: null,
  idTypeSelected: null,
  carTypeSelected: null,
  carModelSelected: null,
  carBrandSelected: null,
  carColorSelected: null,
  setCountrySelected: (country) => set({ countrySelected: country }),
  setInsuranceSelected: (insurance) => set({ insuranceSelected: insurance }),
  setIdTypeSelected: (idType) => set({ idTypeSelected: idType }),
  setCarTypeSelected: (carType) => set({ carTypeSelected: carType }),
  setCarModelSelected: (carModel) => set({ carModelSelected: carModel }),
  setCarBrandSelected: (carBrand) => set({ carBrandSelected: carBrand }),
  setCarColorSelected: (carColor) => set({ carColorSelected: carColor }),
}));

export default useCarInsuranceStore;
