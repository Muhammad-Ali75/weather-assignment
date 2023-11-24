import { create } from "zustand";
import { City } from "../interface/city";
import { getRandomCities } from "../util/common";

type State = {
  citiesList: City[];
  selectedCity: City;
  filterValue: string;
};

type Action = {
  changeSelectedCity: (selectedCity: State["selectedCity"]) => void;
  changeFilter: (filterValue: State["filterValue"]) => void;
};

const useCityStore = create<State & Action>((set) => ({
  citiesList: getRandomCities(),
  filterValue: "",
  selectedCity: {
    country: "",
    name: "",
    lat: "",
    lng: "",
  },
  changeSelectedCity: (selectedCity) => set(() => ({ selectedCity })),
  changeFilter: (filterValue) => set(() => ({ filterValue })),
}));

export default useCityStore;
