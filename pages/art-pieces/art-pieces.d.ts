import { IPiece } from "../../types";

export type ArtPiecesPageProps = {
  pieces: IPiece[];
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: [];
};
