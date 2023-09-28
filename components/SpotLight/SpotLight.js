import { useState, useEffect } from "react";
import { ArtPiecePreview } from "..";
import { getRandomNumber } from "../../lib/utils";

export function SpotLight({ pieces, handleToggleFavorite, artPiecesInfo }) {
  const [randomIndex, setRandomIndex] = useState(getRandomNumber(pieces));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRandomIndex(getRandomNumber(pieces));
    }, 3000);
    return () => {
      clearInterval(intervalID);
    };
  });

  const piece = pieces[randomIndex];

  return (
    <>
      <h2>Spotlight</h2>
      <ul>
        <ArtPiecePreview
          piece={piece}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        ></ArtPiecePreview>
      </ul>
    </>
  );
}
