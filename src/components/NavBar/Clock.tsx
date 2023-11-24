import { useEffect, useState } from "react";
import useSettignsStore from "../../store/settingsStore";
import styled from "styled-components";
import { Colors } from "../../constants/colors";

export default function Clock() {
  const timeMode = useSettignsStore((state) => state.timeMode);
  const theme = useSettignsStore((state) => state.mode);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: timeMode !== "24h",
    })
  );
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: timeMode !== "24h",
        })
      );
    }, 60000);
    return () => clearInterval(intervalID);
  }, [timeMode]);

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  return <Container>{currentTime}</Container>;
}
