import { ArtPiecePreview } from "..";

export function ArtPieces({ pieces, handleToggleFavorite, artPiecesInfo }) {
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
