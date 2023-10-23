import styled from "styled-components";
import { ArtPieceContainer } from "..";
import { ArtPiecePreviewProps as Props } from "./ArtPiecePreview.d";

export function ArtPiecePreview({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}: Props) {
  return (
    <StyledListItem>
      <h3>{piece.name}</h3>
      <ArtPieceContainer
        {...piece}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      ></ArtPieceContainer>
    </StyledListItem>
  );
}

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
