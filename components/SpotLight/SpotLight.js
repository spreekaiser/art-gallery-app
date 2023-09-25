import { useState, useEffect } from "react";
import { ArtPiecePreview } from "..";

export function SpotLight({ pieces, handleToggleFavorite, artPiecesInfo }) {
  const [randomIndex, setRandomIndex] = useState(getRandomNumber());

  function getRandomNumber() {
    return Math.round(Math.random() * (pieces.length - 1));
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRandomIndex(getRandomNumber());
    }, 3000);
    return () => {
      clearInterval(intervalID);
    };
  });

  const picture = pieces[randomIndex];

  return (
    <>
      <h2>Spotlight</h2>
      <ul>
        <ArtPiecePreview
          title={picture.name}
          image={picture.imageSource}
          artist={picture.artist}
          slug={picture.slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        ></ArtPiecePreview>
      </ul>
    </>
  );
}
