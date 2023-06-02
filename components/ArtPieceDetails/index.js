import Image from "next/image";
import Comments from "../Comments";
import CommentForm from "../../components/CommentForm";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({ image, title, artist, slug }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="favoriteDiv">
        <Image src={image} alt={title} width={360} height={240} />
        <FavoriteButton />
      </div>
      <h3>of {artist}</h3>
      <Comments slug={slug} />
      <CommentForm slug={slug} />
    </>
  );
}
