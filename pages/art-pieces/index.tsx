import { ArtPieces } from "../../components";
import { IArtPiecesProps as IProps } from "../../types/types";

export default function ArtPiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: IProps) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        handleTouch={handleTouch}
        touchedArtPiece={touchedArtPiece}
        setTouchedArtPiece={setTouchedArtPiece}
      />
    </>
  );
}
