import { ArtPiecePreview } from "..";
import { ArtPiecesProps as Props } from "../../types.d";

export function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}: Props) {
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
