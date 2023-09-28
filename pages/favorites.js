import { ArtPiecePreview } from "../components";

export default function FavoritesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <h2>My Favorite Art Pieces ❤️</h2>
      <ul>
        {pieces.map((piece) => {
          return (
            artPiecesInfo.includes(piece.slug) && (
              <ArtPiecePreview
                key={piece.slug}
                piece={piece}
                handleToggleFavorite={handleToggleFavorite}
                artPiecesInfo={artPiecesInfo}
              />
            )
          );
        })}
      </ul>
    </>
  );
}
