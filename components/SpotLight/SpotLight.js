import { useState } from "react";
import { ArtPiecePreview } from "..";
import { getRandomNumber } from "../../lib/utils";
import useGetRandomPieceOnIntervall from "../../lib/hooks/useGetRandomPieceOnIntervall";

export function SpotLight({ pieces, handleToggleFavorite, artPiecesInfo }) {
  const [randomIndex, setRandomIndex] = useState(getRandomNumber(pieces));

  useGetRandomPieceOnIntervall(pieces, getRandomNumber, setRandomIndex);

  return (
    <>
      <h2>Spotlight</h2>
      <ul>
        <ArtPiecePreview
          piece={pieces[randomIndex]}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        ></ArtPiecePreview>
      </ul>
    </>
  );
}
