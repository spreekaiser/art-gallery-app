import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useToggleAlarmOverlayOnInterval(
  isAlarm: boolean,
  playAhoogaAlarm: () => void,
  toggleOverlayColor: (
    setOverlayColor: Dispatch<SetStateAction<string>>,
    setBoxOverlayColor: Dispatch<SetStateAction<string>>
  ) => void
) {
  const [overlayColor, setOverlayColor] = useState("darkred");
  const [boxOverlayColor, setBoxOverlayColor] = useState("steelblue");

  useEffect(() => {
    if (isAlarm) {
      playAhoogaAlarm();

      const soundInterval = setInterval(() => {
        playAhoogaAlarm();
      }, 2400);

      const overlayInterval = setInterval(() => {
        toggleOverlayColor(setOverlayColor, setBoxOverlayColor);
      }, 900);

      return () => {
        clearInterval(overlayInterval);
        clearInterval(soundInterval);
      };
    }
  }, [isAlarm]);

  return [overlayColor, boxOverlayColor];
}
