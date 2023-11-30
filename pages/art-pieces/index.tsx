import { ArtPieces } from "../../components";
import { ArtPiecesProps as Props } from "../../types.d";

export default function ArtPiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  setIsAlarm,
}: Props) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        setIsAlarm={setIsAlarm}
      />
    </>
  );
}
