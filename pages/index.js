// import useSWR from "swr";
// import ArtPieces from "../components/ArtPieces";
import SpotLight from "../components/SpotLight";
// import { ArtPiecePreview } from "../components";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
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
