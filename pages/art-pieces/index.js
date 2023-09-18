import { ArtPieces } from "../../components";

export default function ArtPiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
