import { ArtPiecePreview, LoadingSpinner } from "../components";
import { ArtPiecesProps as Props } from "../types/types";

export default function FavoritesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  isAlarm,
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
                isAlarm={isAlarm}
                setIsAlarm={setIsAlarm}
              />
            )
          );
        })}
      </ul>
    </>
  );
}
