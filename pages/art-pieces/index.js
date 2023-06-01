import ArtPieces from "../../components/ArtPieces";
import FavoriteButton from "../../components/FavoriteButton";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
      {/* <FavoriteButton /> */}
    </>
  );
}
