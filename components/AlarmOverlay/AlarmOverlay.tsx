import { Overlay, PopupBox, Text, StyledButton } from "./AlarmOverlay.style";
import { IAlarmOverlayProps as IProps } from "./AlarmOverlay.d";
import useToggleAlarmOverlayOnInterval from "./utils/useToggleAlarmOverlayOnInterval";
import { playSound } from "./utils/audio";
import { toggleOverlayColor } from "./utils/otherUtils";
import { Popup } from "..";

export function AlarmOverlay({ isAlarm, setIsAlarm }: IProps) {
  const [overlayColor, boxOverlayColor] = useToggleAlarmOverlayOnInterval(
    isAlarm,
    playSound,
    toggleOverlayColor
  );

  if (isAlarm)
    return (
      <>
        {/* <PopupBox color={boxOverlayColor}> */}
        {/* <Text>OK buddy I warned you, S.W.A.T. is on their way!</Text> */}
        {/* <StyledButton onClick={() => setIsAlarm(false)}> */}
        {/* It wasn&apos;t me! */}
        {/* </StyledButton> */}
        <Popup trigger="touch" color={boxOverlayColor} />
        {/* </PopupBox> */}

        <Overlay color={overlayColor} />
      </>
    );
}
