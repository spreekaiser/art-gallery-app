import { ArtPieces, LoadingSpinner } from "../../components";
import { IArtPiecesProps as IProps } from "../../types/types";

export default function ArtPiecesPage({ pieces, isLoading }: IProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
