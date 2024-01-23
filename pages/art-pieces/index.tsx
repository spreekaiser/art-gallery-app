import { ArtPieces } from "../../components";
import { IArtPiecesProps as IProps } from "../../types/types";

export default function ArtPiecesPage({ pieces, artPiecesInfo }: IProps) {
  return (
    <>
      <ArtPieces pieces={pieces} artPiecesInfo={artPiecesInfo} />
    </>
  );
}
