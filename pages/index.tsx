import { LoadingSpinner, SpotLight } from "../components";
import { ArtPiecesProps as Props } from "../types";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  setIsAlert,
}: Props) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <SpotLight
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        setIsAlert={setIsAlert}
      />
    </>
  );
}
