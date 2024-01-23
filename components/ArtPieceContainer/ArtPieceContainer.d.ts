import { Dispatch, SetStateAction } from "react";

export interface IArtPieceContainerProps {
  imageSource: string;
  name: string;
  artist: string;
  slug: string;
  artPiecesInfo: string[];
}

export interface IHingeAnimation {
  clicked: boolean;
  onAnimationEnd: Dispatch<SetStateAction<string | null>>;
}
