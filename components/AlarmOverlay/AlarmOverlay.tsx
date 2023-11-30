import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Overlay, PopupBox, Text, StyledButton } from "./AlarmOverlay.style";
import soundFile from "../../assets/audio/ahooga.mp3";

interface IProps {
  isAlarm: boolean;
  setIsAlarm: Dispatch<SetStateAction<boolean>>;
}

export function AlarmOverlay({ isAlarm, setIsAlarm }: IProps) {
  const [overlayColor, setOverlayColor] = useState("darkred");
  const [boxOverlayColor, setBoxOverlayColor] = useState("steelblue");

  function toggleOverlayColor() {
    setOverlayColor((prevColor) =>
      prevColor === "darkred" ? "navy" : "darkred"
    );
    setBoxOverlayColor((prevColor) =>
      prevColor === "crimson" ? "steelblue" : "crimson"
    );
  }

  function playSound() {
    new Audio(soundFile).play();
  }

  useEffect(() => {
    if (isAlarm) {
      playSound();

      const intervalId = setInterval(() => {
        toggleOverlayColor();
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isAlarm]);

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
