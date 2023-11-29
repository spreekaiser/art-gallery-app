import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Overlay, PopupBox, Text } from "./AlertOverlayBlinker.style";

interface IProps {
  isAlert: boolean;
  setIsAlert: Dispatch<SetStateAction<boolean>>;
}

export function AlertOverlayBlinker({ isAlert, setIsAlert }: IProps) {
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
    // new Audio('sound.mp3').play();
  }

  useEffect(() => {
    if (isAlert) {
      playSound();

      const intervalId = setInterval(() => {
        toggleOverlayColor();
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isAlert]);

  if (isAlert)
    return (
      <>
        {/* <Overlay color={boxOverlayColor}> */}
        <PopupBox color={boxOverlayColor}>
          {/* <img src="bild-url" alt="Bild" /> */}
          <Text>Hier ist dein Text.</Text>
          <button onClick={() => setIsAlert(false)}>Schließen</button>
        </PopupBox>
        {/* </Overlay> */}
        <Overlay color={overlayColor} />
      </>
    );
}
