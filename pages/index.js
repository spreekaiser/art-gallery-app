import { SpotLight } from "../components";

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
