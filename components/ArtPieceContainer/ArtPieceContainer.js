import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FavoriteButton } from "..";

export function ArtPieceContainer({
  artist,
  name,
  imageSource: imageURL,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}) {
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

const StyledContainer = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
`;
