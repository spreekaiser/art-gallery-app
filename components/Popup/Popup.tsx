import React, { useState, useMemo } from "react";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, StyledButton, Text } from "./Popup.style";
import { popupData } from "./utils/popupData";
import useSetPopupOpenOnInterval from "./utils/useSetPopupOpenOnInterval";

export function Popup({ trigger }: IProps) {
  const popupContents = useMemo(() => popupData, []);

  const [isOpen, setIsOpen] = useState(false);
  const { content, button } = popupContents[trigger];

  useSetPopupOpenOnInterval(popupContents[trigger], setIsOpen);

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
