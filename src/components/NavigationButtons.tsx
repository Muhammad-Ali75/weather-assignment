import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { routes } from "../constants/routes";
import { Colors } from "../constants/colors";
import useSettignsStore from "../store/settingsStore";

export default function NavigationButtons() {
  const theme = useSettignsStore((state) => state.mode);
  const { pathname } = useLocation();

  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const NavLinks = styled(Link)<{ $selected?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    width: 130px;
    border: 2px solid ${Colors.Blue};
    margin: 10px;
    border-radius: 6px;
    text-decoration: none;
    color: ${(props) =>
      props.$selected
        ? theme === "dark"
          ? Colors.Blue
          : Colors.White
        : theme === "dark"
        ? Colors.White
        : Colors.Black};
    background-color: ${(props) =>
      props.$selected
        ? theme === "dark"
          ? Colors.White
          : Colors.Blue
        : theme !== "dark"
        ? Colors.White
        : Colors.Black};
  `;

  const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  return (
    <>
      <Title>Forecast</Title>
      <ButtonsContainer>
        <NavLinks to={routes.home} $selected={pathname === routes.home}>
          Now
        </NavLinks>
        <NavLinks to={routes.fiveDay} $selected={pathname === routes.fiveDay}>
          5 Days
        </NavLinks>
      </ButtonsContainer>
    </>
  );
}
