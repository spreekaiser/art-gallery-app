import styled from "styled-components";
import { ArtPieceContainer } from "../";

export function ArtPiecePreview({
  piece,
  // image,
  // title,
  // artist,
  // slug,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <StyledListItem>
        {/* <h3>{title}</h3> */}
        <h3>{piece.name}</h3>
        <ArtPieceContainer
          // title={title}
          // image={image}
          // slug={slug}
          // artist={artist}
          // title={piece.name}
          // image={piece.imageSource}
          // slug={piece.slug}
          // artist={piece.artist}
          {...piece}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        ></ArtPieceContainer>
      </StyledListItem>
    </>
  );
}

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
