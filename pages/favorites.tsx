import { ArrowButton, ArtPiecePreview, LoadingSpinner } from "../components";
import { StyledLink } from "../components/ArtPieceContainer/ArtPieceContainer.style";
import { IArtPiecesProps as IProps } from "../types/types";
import { StyledH3 } from "../styles/favorites.style";
import { useArtPiecesInfo } from "../store/artPiecesInfoSlice/artPiecesInfoSlice";

export default function FavoritesPage({ pieces, isLoading }: IProps) {
  const { artPiecesInfo } = useArtPiecesInfo();

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>My Favorite Art Pieces ❤️</h2>
      {pieces && (
        <ul>
          {pieces.map((piece) => {
            return (
              artPiecesInfo.includes(piece.slug) && (
                <ArtPiecePreview key={piece.slug} piece={piece} />
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
