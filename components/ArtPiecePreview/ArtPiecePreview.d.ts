import { IPiece } from "../../types.d";

export type ArtPiecePreviewProps = {
  piece: IPiece;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
};
