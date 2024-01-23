import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { ArtPiecesInfoType, UpdateArtPiecesInfoType } from "../types/types";

// export function toggleFavorite(
//   slug: string,
//   artPiecesInfo: ArtPiecesInfoType,
//   updateArtPiecesInfo: UpdateArtPiecesInfoType,
// ): void {
//   if (artPiecesInfo.includes(slug)) {
//     updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
//   } else {
//     updateArtPiecesInfo([...artPiecesInfo, slug]);
//   }
// }

export function toggleFavorite(
  slug: string,
  artPiecesInfo: ArtPiecesInfoType,
  //   updateArtPiecesInfo: UpdateArtPiecesInfoType,
  updateArtPiecesInfo: (newState: string[]) => void,
  dispatch: AppDispatch,
  setArtPiecesInfoState: ActionCreatorWithPayload<
    string[],
    "artPiecesInfo/setArtPiecesInfoState"
  >
): void {
  let newValue: string[] = [];

  if (artPiecesInfo.includes(slug)) {
    newValue = artPiecesInfo.filter((element) => element !== slug);
  } else {
    newValue = [...artPiecesInfo, slug];
  }

  updateArtPiecesInfo(newValue);
  dispatch(setArtPiecesInfoState(newValue));
}
