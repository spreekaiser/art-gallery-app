import { LoadingSpinner, SpotLight } from "../components";
import { ArtPiecesProps as Props } from "../types";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  setIsAlarm,
}: Props) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <SpotLight
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        setIsAlarm={setIsAlarm}
      />
    </>
  );
}
