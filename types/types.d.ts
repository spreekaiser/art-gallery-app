// import { Draft } from "immer";
import { Dispatch, SetStateAction } from "react";

export interface IPiece {
  slug: string;
  artist: string;
  name: string;
  imageSource: string;
  year: string;
  genre: string;
  colors: string[];
  dimensions: {
    height: number;
    width: number;
    type: string;
  };
}

export interface IArtPiecesProps {
  pieces: IPiece[];
  artPiecesInfo: ArtPiecesInfoType;
  isLoading?: boolean;
}

export interface IApiError {
  message: string;
}

export type UseImmerLocalStorageStateReturn<T> = [T, (updater: any) => void];

export type UseImmerLocalStorageStateType = [
  string[],
  (updater: string[] | ((draft: Draft<ArtPiecesInfoType>) => void)) => void
];
// export type ArtPiecesInfoType = string[];

// export type UpdateArtPiecesInfoType = (
//   updater: string[] | ((draft: Draft<ArtPiecesInfoType>) => void)
// ) => void;
