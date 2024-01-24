import { MouseEvent, TouchEvent } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { ArtPiecesInfoType } from "../types/types";

export function toggleFavorite(
  slug: string,
  artPiecesInfo: ArtPiecesInfoType,
  updateArtPiecesInfo: (newState: string[]) => void,
  dispatch: AppDispatch,
  setArtPiecesInfoState: ActionCreatorWithPayload<
    string[],
    "artPiecesInfo/setArtPiecesInfoState"
  >,
  event: MouseEvent<SVGElement> | TouchEvent<SVGElement>
): void {
  event.preventDefault();

  let newValue: string[] = [];

  if (artPiecesInfo.includes(slug)) {
    newValue = artPiecesInfo.filter((element) => element !== slug);
  } else {
    newValue = [...artPiecesInfo, slug];
  }

  updateArtPiecesInfo(newValue);
  dispatch(setArtPiecesInfoState(newValue));
}
