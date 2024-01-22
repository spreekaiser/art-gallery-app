import { LoadingSpinner, SpotLight } from "../components";
import { IArtPiecesProps as IProps } from "../types/types";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  handleTouch,
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
        handleTouch={handleTouch}
        touchedArtPiece={touchedArtPiece}
        setTouchedArtPiece={setTouchedArtPiece}
      />
    </>
  );
}
