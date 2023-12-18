import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "..";
import { ArtPieceContainerProps as Props } from "./ArtPieceContainer.d";
import styled from "styled-components";
// import { StyledButton } from "../AlarmOverlay/AlarmOverlay.style";

export function ArtPieceContainer({
  artist,
  name,
  imageSource: imageURL,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
  setIsAlarm,
}: Props) {
  return (
    <>
      <div className="favoriteDiv">
        {/* <Link href={`art-pieces/${slug}`}> */}
        {/* <Image */}
        <StyledImage
          src={imageURL}
          alt={name}
          width={360}
          height={240}
          onClick={() => setIsAlarm(true)}
        />
        {/* </Link> */}
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
      <h4>by {artist}</h4>
      <StyledLink href={`art-pieces/${slug}`}>Take a closer look</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  margin-bottom: 1rem;

  &:hover {
    color: var(--main-color2);
    font-weight: bold;
  }
`;

const StyledImage = styled(Image)`
  border: 20px inset darkgoldenrod;
  border-radius: 5px;
  box-shadow: 10px 10px 20px #333;

  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
`;
