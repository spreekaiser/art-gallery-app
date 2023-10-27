import { IPiece } from "../../types";

export type SpotLightProps = {
  pieces: IPiece[];
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
};
