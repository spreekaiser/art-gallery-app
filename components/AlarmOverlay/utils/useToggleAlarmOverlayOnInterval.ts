import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useToggleAlarmOverlayOnInterval(
  isAlarm: boolean,
  playSound: () => void,
  toggleOverlayColor: (
    setOverlayColor: Dispatch<SetStateAction<string>>,
    setBoxOverlayColor: Dispatch<SetStateAction<string>>
  ) => void
) {
  const [overlayColor, setOverlayColor] = useState("darkred");
  const [boxOverlayColor, setBoxOverlayColor] = useState("steelblue");

  useEffect(() => {
    if (isAlarm) {
      playSound();

      const intervalId = setInterval(() => {
        toggleOverlayColor(setOverlayColor, setBoxOverlayColor);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isAlarm]);

  return [overlayColor, boxOverlayColor];
}
