import styled from "styled-components";
import useCityStore from "../../store/citiesStore";
import WeatherIcons from "../WeatherIcons";
import useSettignsStore from "../../store/settingsStore";
import { Colors } from "../../constants/colors";
import { msToTimeString, unitSign } from "../../util/common";
import { fetchTodayForecast } from "../../api/api";
import { useQuery } from "react-query";
import Loader from "../Loader";

export default function CurrentWeather() {
  const theme: string = useSettignsStore((state) => state.mode);
  const unit = useSettignsStore((state) => state.unit);
  const timeMode = useSettignsStore((state) => state.timeMode);
  const cityName = useCityStore((state) => state.selectedCity.name);
  const { lat, lng } = useCityStore((state) => state.selectedCity);
  const { data, isLoading } = useQuery(["todayForecast", lat, lng, unit], () =>
    fetchTodayForecast(lat, lng, unit)
  );
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const ForcastDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 2rem;
    > p {
      font-size: 1.2rem;
      margin: 0.1rem 0 !important;
      color: ${theme === "dark" ? Colors.White : Colors.Black};
    }
  `;
  return (
    <Container>
      <p>{cityName}</p>
      <RowContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <WeatherIcons
              weather={data?.weather?.[0]["main"]}
              description={data?.weather?.[0]["description"]}
            />
            <ForcastDetailsContainer>
              <p>Temp: {`${data?.main?.temp || ""}${unitSign(unit)}`}</p>
              <p>
                Feels Like: {`${data?.main?.feels_like || ""}${unitSign(unit)}`}
              </p>
              <p>Humidity: {data?.main?.humidity || ""}%</p>
              <p>
                Sunrise:{" "}
                {msToTimeString(data?.sys?.sunrise, timeMode === "24h") || ""}
              </p>
              <p>
                Sunset:{" "}
                {msToTimeString(data?.sys?.sunset, timeMode === "24h") || ""}
              </p>
            </ForcastDetailsContainer>
          </>
        )}
      </RowContainer>
    </Container>
  );
}
