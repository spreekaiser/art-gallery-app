import { useState, useEffect } from "react";
import { Overlay, PopupBox, Text, StyledButton } from "./AlarmOverlay.style";
import { IAlarmOverlayProps as IProps } from "./AlarmOverlay.d";
import useToggleAlarmOverlayOnInterval from "./utils/useToggleAlarmOverlayOnInterval";
import { playSound } from "./utils/audio";
import { toggleOverlayColor } from "./utils/otherUtils";
//// import { playSound } from "./utils/audio";
//// import { toggleOverlayColor } from "./utils/otherUtils";

export function AlarmOverlay({ isAlarm, setIsAlarm }: IProps) {
  //// const [overlayColor, setOverlayColor] = useState("darkred");
  //// const [boxOverlayColor, setBoxOverlayColor] = useState("steelblue");

  // useToggleAlarmOverlayOnInterval(isAlarm, playSound, toggleOverlayColor);
  const [overlayColor, boxOverlayColor] = useToggleAlarmOverlayOnInterval(
    isAlarm,
    playSound,
    toggleOverlayColor
  );

  if (isAlarm)
    return (
      <>
        {/* <Overlay color={boxOverlayColor}> */}
        <PopupBox color={boxOverlayColor}>
          {/* <img src="bild-url" alt="Angry Watchman" /> */}
          <Text>OK buddy I warned you, S.W.A.T. is on their way!</Text>
          <StyledButton onClick={() => setIsAlarm(false)}>
            It wasn&apos;t me!
          </StyledButton>
        </PopupBox>
        {/* </Overlay> */}
        <Overlay color={overlayColor} />
      </>
    );
}
