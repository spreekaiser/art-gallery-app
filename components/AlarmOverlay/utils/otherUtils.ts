import { Dispatch, SetStateAction } from "react";

export function toggleOverlayColor(
  setOverlayColor: Dispatch<SetStateAction<string>>,
  setBoxOverlayColor: Dispatch<SetStateAction<string>>
): void {
  setOverlayColor((prevColor) =>
    prevColor === "darkred" ? "navy" : "darkred"
  );
  setBoxOverlayColor((prevColor) =>
    prevColor === "crimson" ? "steelblue" : "crimson"
  );
}
