import { LoadingSpinner, SpotLight } from "../components";
import { IArtPiecesProps as IProps } from "../types/types";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  touchedArtPiece,
  setTouchedArtPiece,
}: IProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <SpotLight
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        touchedArtPiece={touchedArtPiece}
        setTouchedArtPiece={setTouchedArtPiece}
      />
    </>
  );
}
