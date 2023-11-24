import styled from "styled-components";
import NavigationButtons from "../components/NavigationButtons";
import FiveDayForcast from "../components/FiveDayForecast/FiveDayForcast";
import { Colors } from "../constants/colors";
import useSettignsStore from "../store/settingsStore";
import useCityStore from "../store/citiesStore";

export default function FiveDays() {
  const city = useCityStore((state) => state.selectedCity.name);
  const theme: string = useSettignsStore((state) => state.mode);
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
          <FiveDayForcast />
          <NavigationButtons />
        </>
      )}
    </Container>
  );
}
