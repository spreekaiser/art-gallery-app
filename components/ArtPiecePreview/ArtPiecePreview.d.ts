import { IPiece } from "../../types.d";

export type ArtPiecePreviewProps = {
  piece: IPiece;
  handleToggleFavorite: (slug: string) => {};
  artPiecesInfo: string[];
};
