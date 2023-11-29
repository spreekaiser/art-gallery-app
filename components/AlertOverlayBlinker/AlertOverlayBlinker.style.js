import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  z-index: 999;

  opacity: 0.5;
`;

export const PopupBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: var(--main-color2);
  z-index: 1000;

  border: 0.3rem solid ${(props) => props.color};
  border-radius: 50%;
  border-bottom-right-radius: 0;
  height: 50vh;
  width: 50vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// textbox style
export const Text = styled.p`
  font-size: 2rem;
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
