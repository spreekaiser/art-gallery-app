import { SetStateAction, useEffect } from "react";
import { PieceType } from "../utils.d";

export default function useGetRandomPieceOnInterval(
  pieces: PieceType[],
  getRandomNumber: (pieces: PieceType[]) => number,
  setRandomIndex: React.Dispatch<SetStateAction<number>>
) {
  useEffect(() => {
    const intervalID = setInterval(() => {
      setRandomIndex(getRandomNumber(pieces));
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  });
}
