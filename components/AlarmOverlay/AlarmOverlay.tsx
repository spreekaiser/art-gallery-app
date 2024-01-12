import { Overlay } from "./AlarmOverlay.style";
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
        <Popup
          trigger="touch"
          borderColor={boxOverlayColor}
          setIsAlarm={setIsAlarm}
        />
        <Overlay color={overlayColor} />
      </>
    );
}
