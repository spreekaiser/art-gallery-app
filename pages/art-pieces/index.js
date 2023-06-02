import ArtPieces from "../../components/ArtPieces";
import FavoriteButton from "../../components/FavoriteButton";

export default function ArtPiecesPage({ pieces, handleToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <ArtPieces pieces={pieces} handleToggleFavorite={handleToggleFavorite} artPiecesInfo={artPiecesInfo}/>
    </>
  );
}
