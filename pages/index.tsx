import { SpotLight } from "../components";
import { ArtPiecesProps as Props } from "../types";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}: Props) {
  return (
    <>
      <SpotLight
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
