import { ArtPieces } from "../../components";
import { IArtPiecesProps as IProps } from "../../types/types";

export default function ArtPiecesPage({ pieces }: IProps) {
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
