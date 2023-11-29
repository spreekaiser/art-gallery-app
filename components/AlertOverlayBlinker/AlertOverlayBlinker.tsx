import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Overlay, PopupBox, Text } from "./AlertOverlayBlinker.style";

interface IProps {
  isAlert: boolean;
  setIsAlert: Dispatch<SetStateAction<boolean>>;
}

export function AlertOverlayBlinker({ isAlert, setIsAlert }: IProps) {
  // const [showOverlay, setShowOverlay] = useState(false);
  const [overlayColor, setOverlayColor] = useState("darkred");
  const [showBox, setShowBox] = useState(false);
  //   const [boxOverlayColor, setBoxOverlayColor] = useState("midnightblue");
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

  function toggleBox() {
    setShowBox((prevShowBox) => !prevShowBox);
  }

  function toggleOverlay() {
    // setShowBox((prevShowBox) => !prevShowBox);
    toggleBox();
    if (intervalID) {
      clearInterval(intervalID);
    }
  }

  function playSound() {
    // new Audio('sound.mp3').play();
  }

  function startOverlayBlinking() {
    playSound();
    setShowBox(true);
    // toggleBox();
    const id = setInterval(() => {
      toggleOverlayColor();
      //   toggleBox();
      //   playSound();
    }, 2000);

    setIntervalID(id);

    // return () => {
    //   clearInterval(id);
    // };
  }

  useEffect(() => {
    startOverlayBlinking();

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, []);
  //   }, [intervalID]);

  if (isAlert)
    return (
      <>
        {/* {showBox && ( */}
        {/* {isAlert && ( */}
        {/* // <Overlay color={boxOverlayColor}> */}
        <PopupBox>
          {/* <img src="bild-url" alt="Bild" /> */}
          <Text>Hier ist dein Text.</Text>
          <button onClick={toggleBox}>Schließen</button>
        </PopupBox>
        {/* // </Overlay> */}
        {/* )} */}
        <Overlay color={overlayColor} />
      </>
    );
}

// const App = () => {
//   return <Alarm />;
// };
