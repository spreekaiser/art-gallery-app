import Image from "next/image";
import { ColorPalette, CommentForm, Comments, FavoriteButton } from "../";
import { StyledListItem } from "../ArtPiecePreview/ArtPiecePreview.style";
import { StyledImageContainer } from "../ArtPieceDetails/ArtPieceDetails.style";
import { ArtPieceDetailsProps as Props } from "./ArtPieceDetails.d";
import { StyledImage } from "../ArtPieceContainer/ArtPieceContainer.style";

export function ArtPieceDetails({
  imageSource: imageURL,
  name,
  artist,
  slug,
  colors,
  handleToggleFavorite,
  artPiecesInfo,
  // isAlarm,
  setIsAlarm,
}: Props) {
  return (
    <StyledListItem>
      <h3>{name}</h3>
      <div className="favoriteDiv">
        <StyledImageContainer>
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
        </StyledImageContainer>
      </div>
      <h4>by {artist}</h4>
      <ColorPalette colors={colors} />
      <CommentForm title={name} />
      <Comments title={name} />
    </StyledListItem>
  );
}
