import { ArtPiecePreview } from "..";
import { IArtPiecesProps as IProps } from "../../types/types";

export function ArtPieces({ pieces }: IProps) {
  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview key={piece.slug} piece={piece} />
        ))}
      </ul>
    </>
  );
}
