import React from "react";
// import "./LoadingSpinner.css";
import styled, { keyframes } from "styled-components";

export function LoadingSpinner() {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner />
    </StyledSpinnerContainer>
  );
}

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledSpinner = styled.div`
  /* border: 4px solid rgba(0, 0, 0, 0.1); */
  /* border-top: 4px solid #767676; Farbe des Spinners */

  /* border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--accent-color1);
  border-left: 4px solid var(--accent-color1);
  border-right: 4px solid var(--accent-color1);

  border-radius: 50%;
  width: 50px; 
  height: 50px; */

  /* animation: ${spin} 4s linear infinite; */

  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  border-top: 4px solid var(--accent-color1);
  border-left: 4px solid var(--accent-color1);
  border-bottom: 4px solid var(--accent-color1);
  /* border-right: none;  */
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite; /* Verwende die erstellten Keyframes */
  transform: rotate(45deg); /* Rotation */
`;
