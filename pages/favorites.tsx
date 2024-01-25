import { ArrowButton, ArtPiecePreview, LoadingSpinner } from "../components";
import { ArrowLink } from "../components/ArtPieceContainer/ArtPieceContainer.style";
import { IArtPiecesProps as IProps } from "../types/types";
import { H3 } from "../styles/favorites.style";
import { useArtPiecesInfo } from "../store/artPiecesInfo/artPiecesInfoSlice";

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
          <H3>Nothing liked yet...</H3>
          <ArrowLink href="/">
            <ArrowButton width={12}>Inspire me!</ArrowButton>
          </ArrowLink>
        </>
      )}
    </>
  );
}
