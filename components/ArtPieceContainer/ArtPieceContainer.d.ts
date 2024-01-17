import { Dispatch, SetStateAction } from "react";

export type ArtPieceContainerProps = {
  imageSource: string;
  name: string;
  artist: string;
  slug: string;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
  isAlarm: boolean;
  setIsAlarm: Dispatch<SetStateAction<boolean>>;
  handleTouch: (slug, setIsAlarm, setTouchedArtPiece) => void;
  touchedArtPiece: string | null;
  setTouchedArtPiece: Dispatch<SetStateAction<string | null>>;
};

export interface IHingeAnimation {
  clicked: boolean;
  onAnimationEnd: Dispatch<SetStateAction<string | null>>;
}
