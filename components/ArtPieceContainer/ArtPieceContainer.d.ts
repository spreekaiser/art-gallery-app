import { Dispatch, SetStateAction } from "react";

export type ArtPieceContainerProps = {
  imageSource: string;
  name: string;
  artist: string;
  slug: string;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
  setIsAlarm: Dispatch<SetStateAction<boolean>>;
};
