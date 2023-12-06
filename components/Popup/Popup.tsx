import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface IProps {
  trigger: "load" | "hover" | "touch";
  delay: number;
  content: string;
  buttonText: string;
  watchman: "sleepy" | "concerned" | "angry";
  // color?: string;
}

export function Popup({
  trigger,
  delay,
  content,
  watchman,
  buttonText,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (trigger === "load") {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, delay || 0);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [trigger, delay]);

  return (
    <>
      {isOpen && (
        <PopupBox>
          <Text>{content}</Text>
          <StyledButton onClick={() => setIsOpen(false)}>
            {buttonText}
          </StyledButton>
        </PopupBox>
      )}
    </>
  );
}

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
  width: 50vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
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
