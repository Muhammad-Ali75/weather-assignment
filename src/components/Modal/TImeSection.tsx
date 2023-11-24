import styled from "styled-components";
import { Colors } from "../../constants/colors";
import useSettignsStore from "../../store/settingsStore";

export default function TimeSection() {
  const theme = useSettignsStore((state) => state.mode);
  const timeMode = useSettignsStore((state) => state.timeMode);
  const changeTimeMode = useSettignsStore((state) => state.changeTimeMode);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
      font-size: 18px;
      font-weight: bold;
    }
  `;

  const Button = styled.button<{ $selected?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.$selected
        ? theme === "dark"
          ? Colors.White
          : Colors.Blue
        : theme === "dark"
        ? Colors.Black
        : Colors.White} !important;
    color: ${(props) =>
      props.$selected
        ? theme === "dark"
          ? Colors.Blue
          : Colors.White
        : theme === "dark"
        ? Colors.White
        : Colors.Black} !important;
    width: 130px;
    font-size: 16px;
    font-weight: bold;
    margin: 0px 0.5rem;
    border-radius: 10px;
    border: 2px solid ${Colors.Blue} !important;
    padding: 4px;
    cursor: pointer;
  `;
  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <Container>
      <p>Time</p>
      <RowContainer>
        <Button
          $selected={timeMode === "am/pm"}
          onClick={() => changeTimeMode("am/pm")}
        >
          AM / PM
        </Button>
        <Button
          $selected={timeMode === "24h"}
          onClick={() => changeTimeMode("24h")}
        >
          24h
        </Button>
      </RowContainer>
    </Container>
  );
}
