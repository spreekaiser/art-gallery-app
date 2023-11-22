import { ArtPiecePreview, LoadingSpinner } from "..";
import { ArtPiecesProps as Props } from "../../types.d";

export function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
}: Props) {
  //
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces?.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </ul>
    </>
  );
}
