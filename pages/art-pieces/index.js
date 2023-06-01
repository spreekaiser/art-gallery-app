import ArtPieces from "../../components/ArtPieces";
import FavoriteButton from "../../components/FavoriteButton";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
