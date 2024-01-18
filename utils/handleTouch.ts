import { Dispatch, SetStateAction } from "react";

export function handleTouch(
  slug: string,
  setIsAlarm: Dispatch<SetStateAction<boolean>>,
  setTouchedArtPiece: Dispatch<SetStateAction<string | null>>
): void {
  // if no scrollbar visible, don't show one during animation
  const isScrollbarVisible =
    window.innerWidth > document.documentElement.clientWidth;
  if (!isScrollbarVisible) {
    document.body.style.overflow = "hidden";
  }

  setIsAlarm(true);
  setTouchedArtPiece(slug);
}
