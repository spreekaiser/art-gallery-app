import styled from "styled-components";
import { PieceContainer } from "../";

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
      <PieceContainer
        title={title}
        image={image}
        slug={slug}
        artist={artist}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      ></PieceContainer>
    </StyledListItem>
  );
}

const StyledListItem = styled.li``;
