import React, { useState, useEffect, useMemo } from "react";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, StyledButton, Text } from "./Popup.style";
import { popupData } from "./utils/popupData";

export function Popup({ trigger }: IProps) {
  const popupContents = useMemo(() => popupData, []);

  const [isOpen, setIsOpen] = useState(false);
  const { content, delay, watchman, button } = popupContents[trigger];

  useEffect(() => {
    if (popupContents[trigger]) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, delay || 0);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [trigger, delay, popupContents]);

  return (
    <>
      {isOpen && (
        <PopupBox>
          <Text>{content}</Text>
          <StyledButton onClick={() => setIsOpen(false)}>{button}</StyledButton>
        </PopupBox>
      )}
    </>
  );
}
