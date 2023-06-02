import Image from "next/image";
import Comments from "../Comments";
import CommentForm from "../../components/CommentForm";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <h2>{title}</h2>
      <div className="favoriteDiv">
        <Image src={image} alt={title} width={360} height={240} />
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
      <h3>of {artist}</h3>
      <Comments title={title} />
      <CommentForm title={title} />
    </>
  );
}
