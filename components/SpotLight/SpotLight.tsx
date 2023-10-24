import { useState } from "react";
import { ArtPiecePreview } from "..";
import { getRandomNumber } from "../../lib/utils";
import useGetRandomPieceOnInterval from "../../lib/hooks/useGetRandomPieceOnInterval";
import { SpotLightProps as Props } from "./SpotLight.d";

export function SpotLight({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}: Props) {
  const [randomIndex, setRandomIndex] = useState(getRandomNumber(pieces));

  useGetRandomPieceOnInterval(pieces, getRandomNumber, setRandomIndex);

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
