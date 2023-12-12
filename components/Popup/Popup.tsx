import React, { useState, useMemo } from "react";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, StyledButton, Text } from "./Popup.style";
import { popupData } from "./utils/popupData";
import useOpenPopupOnInterval from "./utils/useOpenPopupOnInterval";

export function Popup({ trigger }: IProps) {
  const popupContents = useMemo(() => popupData, []);

  const [isOpen, setIsOpen] = useState(false);
  const { content, button } = popupContents[trigger];

  // useOpenPopupOnInterval(popupContents, trigger, setIsOpen);
  useOpenPopupOnInterval(popupContents[trigger], setIsOpen);

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
