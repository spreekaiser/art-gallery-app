import Image from "next/image";
import { useState, useEffect } from "react";

export default function SpotLight({ pieces }) {
  //   console.log("SpotLight: ", pieces);
  const [randomIndex, setRandomIndex] = useState(getRandomNumber());

  function getRandomNumber() {
    const randomNumber = Math.round(Math.random() * (pieces.length - 1));
    return randomNumber;
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRandomIndex(getRandomNumber());
    }, 2000);
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div className="spotlight">
      <h1>Art Gallery</h1>
      <h3>{pieces[randomIndex].name}</h3>
      <Image
        src={pieces[randomIndex].imageSource}
        alt={pieces[randomIndex].name}
        width={360}
        height={240}
      />
      <h4>{pieces[randomIndex].artist}</h4>
    </div>
  );
}
