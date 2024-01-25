import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-width: 0.3rem;
  border-style: solid;
  border-image: linear-gradient(
      to top,
      var(--accent-color1),
      var(--accent-color2)
    )
    1;
  animation: ${spin} 1.5s linear infinite;
`;
