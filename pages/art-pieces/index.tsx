import { ArtPieces } from "../../components";
import { ArtPiecesProps as Props } from "../../types/types";

export default function ArtPiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isAlarm,
  setIsAlarm,
  handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: Props) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isAlarm={isAlarm}
        setIsAlarm={setIsAlarm}
        handleTouch={handleTouch}
        touchedArtPiece={touchedArtPiece}
        setTouchedArtPiece={setTouchedArtPiece}
      />
    </>
  );
}
