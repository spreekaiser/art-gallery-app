import React, { useState, useEffect } from "react";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, StyledButton, Text } from "./Popup.style";

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
