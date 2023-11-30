import { ArtPiecePreview, LoadingSpinner } from "../components";
import { ArtPiecesProps as Props } from "../types";

export default function FavoritesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  setIsAlarm,
}: Props) {
  if (isLoading) return <LoadingSpinner />;

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
                setIsAlarm={setIsAlarm}
              />
            )
          );
        })}
      </ul>
    </>
  );
}
