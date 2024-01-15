import { useRouter } from "next/router";
import { ArtPieceDetails } from "../../components";
import { ArtPiecesProps as Props } from "../../types/types";

export default function DetailsPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isAlarm,
  setIsAlarm,
}: Props) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedPiece = pieces.find((piece) => piece.slug === slug);

  if (!selectedPiece) return;

  return (
    <>
      <h2>You`re taking a closer look at</h2>
      <ul>
        <ArtPieceDetails
          {...selectedPiece}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          isAlarm={isAlarm}
          setIsAlarm={setIsAlarm}
        />
      </ul>
    </>
  );
}
