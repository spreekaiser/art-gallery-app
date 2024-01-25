import styled from "styled-components";
import Image from "next/image";
import { IPopupBox } from "./Popup.d";

export const PopupBox = styled.div<IPopupBox>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: var(--main-color2);
  z-index: 1001;

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

export const WatchmanGIF = styled(Image)`
  margin-bottom: 1rem;
`;
