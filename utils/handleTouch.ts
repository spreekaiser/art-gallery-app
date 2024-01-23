import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

export function handleTouch(
  slug: string,
  dispatch: AppDispatch,
  startAlarm: ActionCreatorWithoutPayload<"alarm/startAlarm">,
  setTouchedPiece: ActionCreatorWithPayload<
    string,
    "touchedPiece/setTouchedPiece"
  >
): void {
  // if no scrollbar visible, prevent from showing one during animation
  const isScrollbarVisible =
    window.innerWidth > document.documentElement.clientWidth;
  if (!isScrollbarVisible) {
    document.body.style.overflow = "hidden";
  }

  dispatch(startAlarm());
  dispatch(setTouchedPiece(slug));
}
