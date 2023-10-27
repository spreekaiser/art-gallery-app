import { ArtPiecePreview } from "..";
import { IPiece } from "../../types";

type ArtPiecesProps = {
  pieces: IPiece[];
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: [];
};

export function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}: ArtPiecesProps) {
  //
  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces?.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </ul>
    </>
  );
}
