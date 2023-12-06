import React, { useState, useEffect } from "react";
import { PopupBox, StyledButton, Text } from "./Popup.style";

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
