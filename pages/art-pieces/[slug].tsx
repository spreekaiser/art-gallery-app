import { useRouter } from "next/router";
import { ArtPieceDetails } from "../../components";
import { IArtPiecesProps as IProps } from "../../types/types";

export default function DetailsPage({ pieces, artPiecesInfo }: IProps) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedPiece = pieces.find((piece) => piece.slug === slug);

  if (!selectedPiece) return;

  return (
    <>
      <h2>You`re taking a closer look at</h2>
      <ul>
        <ArtPieceDetails {...selectedPiece} artPiecesInfo={artPiecesInfo} />
      </ul>
    </>
  );
}
