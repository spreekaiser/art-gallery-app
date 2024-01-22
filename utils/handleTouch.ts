import { Dispatch, SetStateAction } from "react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

export function handleTouch(
  slug: string,
  dispatch: AppDispatch,
  startAlarm: ActionCreatorWithoutPayload<"alarm/startAlarm">,
  setTouchedArtPiece: Dispatch<SetStateAction<string | null>>
): void {
  // if no scrollbar visible, prevent from showing one during animation
  const isScrollbarVisible =
    window.innerWidth > document.documentElement.clientWidth;
  if (!isScrollbarVisible) {
    document.body.style.overflow = "hidden";
  }

  dispatch(startAlarm());

  setTouchedArtPiece(slug);
}
