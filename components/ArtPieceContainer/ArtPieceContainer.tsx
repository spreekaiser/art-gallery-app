import { FavoriteButton } from "..";
import { ArrowButton } from "..";
import { ArtPieceContainerProps as Props } from "./ArtPieceContainer.d";
import { StyledImage, StyledLink } from "./ArtPieceContainer.style";

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
        <StyledImage
          src={imageURL}
          alt={name}
          width={360}
          height={240}
          onClick={() => setIsAlarm(true)}
        />
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
      <h4>by {artist}</h4>
      <StyledLink href={`art-pieces/${slug}`}>
        <ArrowButton width={16}>Take a closer look</ArrowButton>
      </StyledLink>
    </>
  );
}
