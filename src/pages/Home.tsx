import styled from "styled-components";
import CurrentWeather from "../components/TodayForcast/TodayForcast";
import NavigationButtons from "../components/NavigationButtons";
import useCityStore from "../store/citiesStore";
import { Colors } from "../constants/colors";
import useSettignsStore from "../store/settingsStore";

export default function Home() {
  const city = useCityStore((state) => state.selectedCity.name);
  const theme = useSettignsStore((state) => state.mode);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 69.95vh;
    > p {
      font-size: 24px;
      color: ${theme === "dark" ? Colors.White : Colors.Black};
    }
  `;
  return (
    <Container>
      {city === "" ? (
        <p>Pick a city to see full forecast</p>
      ) : (
        <>
          <CurrentWeather />
          <NavigationButtons />
        </>
      )}
    </Container>
  );
}
