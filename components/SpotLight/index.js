import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ArtPiecePreview } from "../";

export default function SpotLight({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
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

  const picture = pieces[randomIndex];

  return (
    <div className="spotlight">
      <h1>Art Gallery</h1>
      <ArtPiecePreview
        title={picture.name}
        image={picture.imageSource}
        artist={picture.artist}
        slug={picture.slug}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      ></ArtPiecePreview>
    </div>
  );
}
