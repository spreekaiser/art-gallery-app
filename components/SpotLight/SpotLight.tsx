import { useState } from "react";
import { ArtPiecePreview } from "..";
import { getRandomNumber } from "../../lib/utils";
import useGetRandomPieceOnInterval from "../../lib/hooks/useGetRandomPieceOnInterval";
import { IArtPiecesProps as IProps } from "../../types/types";

export function SpotLight({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  // isAlarm,
  // setIsAlarm,
  handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: IProps) {
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
          // isAlarm={isAlarm}
          // setIsAlarm={setIsAlarm}
          handleTouch={handleTouch}
          touchedArtPiece={touchedArtPiece}
          setTouchedArtPiece={setTouchedArtPiece}
        ></ArtPiecePreview>
      </ul>
    </>
  );
}
