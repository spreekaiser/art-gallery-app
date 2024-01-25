import { Dispatch, SetStateAction } from "react";

export interface IHingeAnimation {
  clicked: boolean;
  onAnimationEnd: Dispatch<SetStateAction<string | null>>;
}
