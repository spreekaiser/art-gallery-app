import { Overlay } from "./AlarmOverlay.style";
//// import { IAlarmOverlayProps as IProps } from "./AlarmOverlay.d";
import useToggleAlarmOverlayOnInterval from "./utils/useToggleAlarmOverlayOnInterval";
import { playAhoogaAlarm } from "./utils/audio";
import { toggleOverlayColor } from "./utils/otherUtils";
import { Popup } from "..";
import { useAppSelector } from "../../lib/hooks/storeHooks";
import { selectAlarm } from "../../store/alarm/alarmSlice";

//// export function AlarmOverlay({ isAlarm, setIsAlarm }: IProps) {
export function AlarmOverlay() {
  const isAlarm = useAppSelector(selectAlarm);
  const [overlayColor, boxOverlayColor] = useToggleAlarmOverlayOnInterval(
    isAlarm,
    playAhoogaAlarm,
    toggleOverlayColor
  );

  // console.log(isAlarm);

  if (isAlarm)
    return (
      <>
        <Popup
          trigger="touch"
          borderColor={boxOverlayColor}
          //// setIsAlarm={setIsAlarm}
        />
        <Overlay color={overlayColor} />
      </>
    );
}
