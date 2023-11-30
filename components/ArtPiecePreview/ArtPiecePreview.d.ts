import { Dispatch, SetStateAction } from "react";
import { IPiece } from "../../types.d";

export type ArtPiecePreviewProps = {
  piece: IPiece;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
  setIsAlarm: Dispatch<SetStateAction<boolean>>;
};
