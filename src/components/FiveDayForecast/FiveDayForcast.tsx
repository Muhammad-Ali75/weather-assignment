import styled from "styled-components";
import useCityStore from "../../store/citiesStore";
import useSettignsStore from "../../store/settingsStore";
import { Colors } from "../../constants/colors";
import SingleDayForecast from "./SingleDayForecast";
import { useQuery } from "react-query";
import { fetch5DayForecast } from "../../api/api";
import { filter5daysData } from "../../util/common";
import Loader from "../Loader";

export default function FiveDayForcast() {
  const theme: string = useSettignsStore((state) => state.mode);
  const cityName = useCityStore((state) => state.selectedCity.name);
  const unit = useSettignsStore((state) => state.unit);
  const { lat, lng } = useCityStore((state) => state.selectedCity);
  const { data, isLoading } = useQuery(["5DayForecast", lat, lng, unit], () =>
    fetch5DayForecast(lat, lng, unit)
  );
  const filteredList = filter5daysData(data?.list || []).slice(0, 5);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-height: 60vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  return (
    <Container>
      <p>{cityName}</p>
      <RowContainer>
        {isLoading ? (
          <Loader />
        ) : (
          filteredList.map((item, i: number) => (
            <SingleDayForecast key={i} {...item} />
          ))
        )}
      </RowContainer>
    </Container>
  );
}
