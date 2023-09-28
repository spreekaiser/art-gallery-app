import { ArtPiecePreview } from "..";

export function ArtPieces({ pieces, handleToggleFavorite, artPiecesInfo }) {
  //
  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces?.map((piece) => (
          <ArtPiecePreview
            piece={piece}
            // key={piece.imageSource}
            // image={piece.imageSource}
            // title={piece.name}
            // artist={piece.artist}
            // slug={piece.slug}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </ul>
    </>
  );
}
