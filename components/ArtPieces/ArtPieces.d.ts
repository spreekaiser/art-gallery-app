import { IPiece } from "../../types";

export type ArtPiecesProps = {
  pieces: IPiece[];
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: [];
};
