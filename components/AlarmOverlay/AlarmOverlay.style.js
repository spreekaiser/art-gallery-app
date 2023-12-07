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
  padding: 2rem;
  background-color: var(--main-color2);
  z-index: 1000;

  border: 0.3rem solid ${(props) => props.color};
  border-radius: 2rem;
  border-bottom-right-radius: 0;
  width: 75vw;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// textbox style
export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
`;

export const StyledButton = styled.button`
  &:hover {
    filter: brightness(110%);
    color: var(--accent-color2);
    cursor: pointer;
    box-shadow: 3px 3px 6px #333;
    transform: scale(1.02) rotate(1deg);
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
