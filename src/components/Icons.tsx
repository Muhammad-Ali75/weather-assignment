import styled from "styled-components";
import { Colors } from "../constants/colors";

interface ImageProps {
  height: number;
  width: number;
  src: string;
  color?: string;
  onChange?: () => void;
  toggle?: boolean;
}

export default function Icons({
  height,
  width,
  src,
  color,
  onChange,
  toggle,
}: ImageProps) {
  const Image = styled.img`
    height: ${height}px;
    width: ${width}px;
    border-radius: 50%;
    background-color: ${toggle ? Colors.White : "transparent"};

    filter: ${toggle
      ? "none"
      : `drop-shadow(0 0 10px ${color || Colors.Blue})`};
    cursor: pointer;
  `;
  return <Image src={src} onClick={onChange} />;
}
