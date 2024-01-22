import { ArtPieces } from "../../components";
import { IArtPiecesProps as IProps } from "../../types/types";

export default function ArtPiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  touchedArtPiece,
  setTouchedArtPiece,
}: IProps) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        touchedArtPiece={touchedArtPiece}
        setTouchedArtPiece={setTouchedArtPiece}
      />
    </>
  );
}
