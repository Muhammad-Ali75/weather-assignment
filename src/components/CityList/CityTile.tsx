import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { City } from "../../interface/city";
import useCityStore from "../../store/citiesStore";
import useSettignsStore from "../../store/settingsStore";

export default function CityTile({ country, name, lat, lng }: City) {
  const changeSelectedCity = useCityStore((state) => state.changeSelectedCity);
  const selectedCity = useCityStore((state) => state.selectedCity);
  const selected = selectedCity.name === name;
  const theme = useSettignsStore((state) => state.mode);
  const Container = styled.button`
    padding: 3px;
    margin: 10px;
    width: 180px;
    background-color: ${selected
      ? theme === "dark"
        ? Colors.White
        : Colors.Blue
      : theme !== "dark"
      ? Colors.White
      : Colors.Black};
    border: 2px solid ${Colors.Blue};
    border-radius: 6px;
    cursor: pointer;
  `;

  const Text = styled.p`
    color: ${selected
      ? theme === "dark"
        ? Colors.Blue
        : Colors.White
      : theme === "dark"
      ? Colors.White
      : Colors.Black};
    text-overflow: ellipsis;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
  `;
  return (
    <Container
      onClick={() =>
        changeSelectedCity({
          country,
          name,
          lat,
          lng,
        })
      }
    >
      <Text>{name}</Text>
    </Container>
  );
}
