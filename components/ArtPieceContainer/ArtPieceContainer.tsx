import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "..";
import { ArtPieceContainerProps as Props } from "./ArtPieceContainer.d";

export function ArtPieceContainer({
  artist,
  name,
  imageSource: imageURL,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}: Props) {
  return (
    <>
      <div className="favoriteDiv">
        <Link href={`art-pieces/${slug}`}>
          <Image src={imageURL} alt={name} width={360} height={240} />
        </Link>
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
      <h4>by {artist}</h4>
    </>
  );
}