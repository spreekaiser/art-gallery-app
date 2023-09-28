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

  // const picture = pieces[randomIndex];
  const piece = pieces[randomIndex];

  return (
    <>
      <h2>Spotlight</h2>
      <ul>
        <ArtPiecePreview
          piece={piece}
          // title={picture.name}
          // image={picture.imageSource}
          // artist={picture.artist}
          // slug={picture.slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        ></ArtPiecePreview>
      </ul>
    </>
  );
}
