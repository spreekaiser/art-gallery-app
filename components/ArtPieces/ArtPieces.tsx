import { ArtPiecePreview, LoadingSpinner } from "..";
import { IArtPiecesProps as IProps } from "../../types/types";

export function ArtPieces({ pieces, artPiecesInfo, isLoading }: IProps) {
  //
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </ul>
    </>
  );
}
