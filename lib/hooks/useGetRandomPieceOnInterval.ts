import { SetStateAction, useEffect } from "react";
import { IPiece } from "../../types/types";

export default function useGetRandomPieceOnInterval(
  pieces: IPiece[],
  getRandomNumber: (pieces: IPiece[]) => number,
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
