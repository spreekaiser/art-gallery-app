import { IPiece } from "../../types";

export type SpotLightProps = {
  pieces: IPiece[];
  handleToggleFavorite: (slug: string) => {};
  artPiecesInfo: string[];
};
