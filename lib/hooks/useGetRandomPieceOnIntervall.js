import { useEffect } from "react";

export default function useGetRandomPieceOnIntervall(
  pieces,
  getRandomNumber,
  setRandomIndex
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
