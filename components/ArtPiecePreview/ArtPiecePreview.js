import styled from "styled-components";
import { ArtPieceContainer } from "../";

export function ArtPiecePreview({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <StyledListItem>
        <h3>{piece.name}</h3>
        <ArtPieceContainer
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
