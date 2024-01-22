import { Dispatch, SetStateAction } from "react";
import { IPiece } from "../../types/types";

export type ArtPiecePreviewProps = {
  piece: IPiece;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
  // isAlarm: boolean;
  // setIsAlarm: Dispatch<SetStateAction<boolean>>;
  handleTouch: (slug: string) => void;
  touchedArtPiece: string | null;
  setTouchedArtPiece: Dispatch<SetStateAction<string | null>>;
};
