import styled from "styled-components";
import { ArtPieceContainer } from "../";

export function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <StyledListItem>
      <h3>{title}</h3>
      <ArtPieceContainer
        title={title}
        image={image}
        slug={slug}
        artist={artist}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      ></ArtPieceContainer>
    </StyledListItem>
  );
}

const StyledListItem = styled.li``;
