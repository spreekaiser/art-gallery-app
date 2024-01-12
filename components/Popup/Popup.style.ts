import styled from "styled-components";
import { IPopupBox } from "./Popup.d";

export const PopupBox = styled.div<IPopupBox>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: var(--main-color2);
  z-index: 1000;

  border: 0.3rem solid ${(props) => props.borderColor || "black"};
  border-radius: 2rem;
  border-bottom-right-radius: 0;
  width: 75vw;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
`;

export const StyledButton = styled.button`
  margin-top: 1rem;

  &:hover {
    filter: brightness(110%);
    color: var(--accent-color2);
    cursor: pointer;
    box-shadow: 3px 3px 6px #333;
    transform: scale(1.02) rotate(1deg);
  }
`;
