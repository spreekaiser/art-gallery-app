import { ArtPiecePreview, LoadingSpinner } from "..";
import { ArtPiecesProps as Props } from "../../types/types";

export function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  isAlarm,
  setIsAlarm,
  handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: Props) {
  //
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            isAlarm={isAlarm}
            setIsAlarm={setIsAlarm}
            handleTouch={handleTouch}
            touchedArtPiece={touchedArtPiece}
            setTouchedArtPiece={setTouchedArtPiece}
          />
        ))}
      </ul>
    </>
  );
}
