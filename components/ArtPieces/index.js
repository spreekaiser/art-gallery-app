import { ArtPiecePreview } from "../";

export default function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  // console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.imageSource}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        );
      })}
    </ul>
  );
}
