import { ColorPalette, CommentForm, Comments, FavoriteButton } from "../";
import { StyledListItem } from "../ArtPiecePreview/ArtPiecePreview.style";
import { StyledImageContainer } from "../ArtPieceDetails/ArtPieceDetails.style";
import { ArtPieceDetailsProps as Props } from "./ArtPieceDetails.d";
import {
  StyledImage,
  HingeAnimation,
} from "../ArtPieceContainer/ArtPieceContainer.style";

export function ArtPieceDetails({
  imageSource: imageURL,
  name,
  artist,
  slug,
  colors,
  handleToggleFavorite,
  artPiecesInfo,
  isAlarm,
  setIsAlarm,
  handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: Props) {
  return (
    <StyledListItem>
      <h3>{name}</h3>
      {/* <div className="favoriteDiv"> */}
      <HingeAnimation
        className="favoriteDiv"
        onClick={() => handleTouch(slug)}
        clicked={isAlarm && touchedArtPiece === slug}
        onAnimationEnd={() => setTouchedArtPiece(null)}
      >
        <StyledImageContainer>
          <StyledImage
            src={imageURL}
            alt={name}
            width={360}
            height={240}
            // onClick={() => setIsAlarm(true)}
          />
          <FavoriteButton
            slug={slug}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </StyledImageContainer>
      </HingeAnimation>
      {/* </div> */}
      <h4>by {artist}</h4>
      <ColorPalette colors={colors} />
      <CommentForm title={name} />
      <Comments title={name} />
    </StyledListItem>
  );
}
