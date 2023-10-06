import Image from "next/image";
import styled from "styled-components";
import { CommentForm, Comments, FavoriteButton } from "../";
import { StyledListItem } from "../ArtPiecePreview/ArtPiecePreview";

export function ArtPieceDetails({
  imageSource: imageURL,
  name,
  artist,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <StyledListItem>
      <h3>{name}</h3>
      <div className="favoriteDiv">
        {/* <Image src={imageURL} alt={name} width={360} height={240} /> */}
        <StyledImage src={imageURL} alt={name} width={360} height={240} />
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
      <h4>by {artist}</h4>
      <Comments title={name} />
      <CommentForm title={name} />
    </StyledListItem>
  );
}

const StyledImage = styled(Image)`
  transition: all 0.5s;
  &:hover {
    transform: scale(1.5) rotate(2deg);
  }
`;
