import Image from "next/image";
import { useState, useEffect } from "react";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";
import PieceContainer from "../ArtPiecePreview";

export default function SpotLight({ pieces }) {
  const [randomIndex, setRandomIndex] = useState(getRandomNumber());

  // console.log("SpotLight: ", pieces);

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

  const picture = pieces[randomIndex];
  // console.log(pieces[randomIndex].imageSource);

  return (
    <div className="spotlight">
      <h1>Art Gallery</h1>
      <PieceContainer
        title={picture.name}
        image={picture.imageSource}
        artist={picture.artist}
      ></PieceContainer>
      {/* <h4>@{picture.artist}</h4> */}
    </div>
  );
}
