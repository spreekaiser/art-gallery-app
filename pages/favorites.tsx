import { ArrowButton, ArtPiecePreview, LoadingSpinner } from "../components";
import { StyledLink } from "../components/ArtPieceContainer/ArtPieceContainer.style";
import { ArtPiecesProps as Props } from "../types/types";
import { StyledH3 } from "./favorites.style";

export default function FavoritesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  isAlarm,
  setIsAlarm,
  handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: Props) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>My Favorite Art Pieces ❤️</h2>
      {pieces && (
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
                  handleTouch={handleTouch}
                  touchedArtPiece={touchedArtPiece}
                  setTouchedArtPiece={setTouchedArtPiece}
                />
              )
            );
          })}
        </ul>
      )}
      {!artPiecesInfo.length && (
        <>
          <StyledH3>Nothing liked yet...</StyledH3>
          <StyledLink href="/">
            <ArrowButton width={12}>Inspire me!</ArrowButton>
          </StyledLink>
        </>
      )}
    </>
  );
}
