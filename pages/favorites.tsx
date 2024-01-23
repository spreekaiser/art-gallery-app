import { ArrowButton, ArtPiecePreview, LoadingSpinner } from "../components";
import { StyledLink } from "../components/ArtPieceContainer/ArtPieceContainer.style";
import { IArtPiecesProps as IProps } from "../types/types";
import { StyledH3 } from "../styles/favorites.style";
import { useDispatch } from "react-redux";
import { useArtPiecesInfo } from "../store/artPiecesInfoSlice/artPiecesInfoSlice";

export default function FavoritesPage({
  pieces,
  // artPiecesInfo,
  isLoading,
}: IProps) {
  // const { artPiecesInfo, updateArtPiecesInfo } = useArtPiecesInfo();
  const { artPiecesInfo } = useArtPiecesInfo();
  //// const dispatch = useDispatch();

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
                  // artPiecesInfo={artPiecesInfo}
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
