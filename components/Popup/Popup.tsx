import React, { useState, useMemo } from "react";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, WatchmanGIF, Text } from "./Popup.style";
import { popupData } from "./utils/popupData";
import useSetPopupOpenOnInterval from "./utils/useSetPopupOpenOnInterval";
import { ArrowButton } from "..";
import { useAppDispatch } from "../../lib/hooks/storeHooks";
import { stopAlarm } from "../../store/alarm/alarmSlice";

export function Popup({ trigger, borderColor }: IProps) {
  const dispatch = useAppDispatch();
  const popupContents = useMemo(() => popupData, []);
  const [isOpen, setIsOpen] = useState(false);
  const { content, button, watchman } = popupContents[trigger];

  useSetPopupOpenOnInterval(popupContents[trigger], setIsOpen);

  function handleClick() {
    document.body.style.overflow = "visible";
    setIsOpen(false);
    dispatch(stopAlarm());
  }

  return (
    <>
      {isOpen && (
        <PopupBox borderColor={borderColor}>
          <Text>{content}</Text>
          <WatchmanGIF
            src={`/images/watchman-${watchman}.gif`}
            height={256}
            width={192}
            alt={`A very ${watchman} watchman`}
          />
          <ArrowButton
            color="var(--accent-color1)"
            width={12}
            handleClick={handleClick}
          >
            {button}
          </ArrowButton>
        </PopupBox>
      )}
    </>
  );
}
