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
      <h2>{title}</h2>
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

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
