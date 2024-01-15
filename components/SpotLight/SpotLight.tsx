import { useState } from "react";
import { ArtPiecePreview } from "..";
import { getRandomNumber } from "../../lib/utils";
import useGetRandomPieceOnInterval from "../../lib/hooks/useGetRandomPieceOnInterval";
import { ArtPiecesProps as Props } from "../../types/types";

export function SpotLight({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isAlarm,
  setIsAlarm,
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
          isAlarm={isAlarm}
          setIsAlarm={setIsAlarm}
        ></ArtPiecePreview>
      </ul>
    </>
  );
}
