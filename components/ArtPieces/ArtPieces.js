import { ArtPiecePreview } from "..";

export function ArtPieces({ pieces, handleToggleFavorite, artPiecesInfo }) {
  //
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.imageSource}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      ))}
    </ul>
  );
}
