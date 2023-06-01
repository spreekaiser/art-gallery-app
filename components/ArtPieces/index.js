import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
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
          />
        );
      })}
    </ul>
  );
}
