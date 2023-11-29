import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Overlay, PopupBox, Text } from "./AlertOverlayBlinker.style";

interface IProps {
  isAlert: boolean;
  setIsAlert: Dispatch<SetStateAction<boolean>>;
}

export function AlertOverlayBlinker({ isAlert, setIsAlert }: IProps) {
  const [overlayColor, setOverlayColor] = useState("darkred");
  // const [boxOverlayColor, setBoxOverlayColor] = useState("midnightblue");
  // const [intervalID, setIntervalID] = useState<number | null>(null);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);

  function toggleOverlayColor() {
    setOverlayColor((prevColor) =>
      prevColor === "darkred" ? "midnightblue" : "darkred"
    );
    // setBoxOverlayColor((prevColor) =>
    //   prevColor === "darkred" ? "midnightblue" : "darkred"
    // );
  }

  // function toggleBox() {
  // setShowBox((prevShowBox) => !prevShowBox);
  // }

  function toggleOverlay() {
    // setShowBox((prevShowBox) => !prevShowBox);
    // toggleBox();
    // if (intervalID) {
    //   clearInterval(intervalID);
    // }
  }

  function playSound() {
    // new Audio('sound.mp3').play();
  }

  // function startOverlayBlinking() {
  //   playSound();

  //   const id = setInterval(() => {
  //     toggleOverlayColor();
  //   }, 2000);

  //   // setIntervalID(id);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }
  // useEffect(() => {
  //   if (isAlert) {
  //     startOverlayBlinking();
  //   }
  // }, [isAlert]);

  useEffect(() => {
    const id = setInterval(() => {
      toggleOverlayColor();
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [isAlert]);

  // useEffect(() => {
  //   startOverlayBlinking();

  //   return () => {
  //     if (intervalID) {
  //       clearInterval(intervalID);
  //     }
  //   };
  // }, []);
  //   }, [intervalID]);

  if (isAlert)
    return (
      <>
        {/* // <Overlay color={boxOverlayColor}> */}
        <PopupBox>
          {/* <img src="bild-url" alt="Bild" /> */}
          <Text>Hier ist dein Text.</Text>
          <button onClick={() => setIsAlert(false)}>Schließen</button>
        </PopupBox>
        {/* // </Overlay> */}
        <Overlay color={overlayColor} />
      </>
    );
}
