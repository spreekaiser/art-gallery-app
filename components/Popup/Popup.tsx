import React, { useState, useMemo } from "react";
import Image from "next/image";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, StyledButton, Text } from "./Popup.style";
import { popupData } from "./utils/popupData";
import useSetPopupOpenOnInterval from "./utils/useSetPopupOpenOnInterval";

export function Popup({ trigger }: IProps) {
  const popupContents = useMemo(() => popupData, []);

  const [isOpen, setIsOpen] = useState(false);
  const { content, button, watchman } = popupContents[trigger];

  useSetPopupOpenOnInterval(popupContents[trigger], setIsOpen);

  return (
    <>
      {isOpen && (
        <PopupBox>
          <Text>{content}</Text>
          <Image
            src={`/images/watchman-${watchman}.gif`}
            width={192}
            height={256}
            alt={`A very ${watchman} watchman`}
          />
          <StyledButton onClick={() => setIsOpen(false)}>{button}</StyledButton>
        </PopupBox>
      )}
    </>
  );
}
