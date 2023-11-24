import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 4px solid #f0f0f0;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return <LoaderContainer />;
};

export default Loader;
