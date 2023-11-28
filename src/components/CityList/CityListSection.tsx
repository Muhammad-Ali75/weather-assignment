import styled from "styled-components";
import CityTile from "./CityTile";
import { City } from "../../interface/city";
import useCityStore from "../../store/citiesStore";
import citiesList from "cities.json";
import { useMemo } from "react";

export default function CitiesSection() {
  const cities = useCityStore((state) => state.citiesList);
  const filterValue = useCityStore((state) => state.filterValue);

  function filterCities() {
    const citiesArray: City[] = citiesList as City[];
    let filtred: City[] = [];
    if (filterValue.length) {
      filtred = citiesArray
        .filter((item) => {
          if (!filterValue) return true;
          if (
            item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.name.includes(filterValue)
          ) {
            return true;
          }
        })
        .slice(0, 18);
    }
    if (filtred.length) {
      return filtred;
    } else return cities;
  }

  const filteredCities = useMemo(filterCities, [filterValue, cities]);

  const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    min-height: 23.8vh;
    height: fit-content;
  `;

  return (
    <ListContainer>
      {filteredCities.map((city: City, i: number) => (
        <CityTile key={i} {...city} />
      ))}
    </ListContainer>
  );
}
