import { useState } from "react";
import { ArtPiecePreview } from "..";
import { getRandomNumber } from "../../lib/utils";
import useGetRandomPieceOnInterval from "../../lib/hooks/useGetRandomPieceOnInterval";
import { IArtPiecesProps as IProps } from "../../types/types";

export function SpotLight({ pieces }: IProps) {
  const [randomIndex, setRandomIndex] = useState(getRandomNumber(pieces));

  useGetRandomPieceOnInterval(pieces, getRandomNumber, setRandomIndex);

  return (
    <>
      <h2>Spotlight</h2>
      <ul>
        <ArtPiecePreview piece={pieces[randomIndex]}></ArtPiecePreview>
      </ul>
    </>
  );
}
