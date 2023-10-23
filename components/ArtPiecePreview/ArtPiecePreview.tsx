import styled from "styled-components";
import { ArtPieceContainer } from "..";

interface IPiece {
  slug: string;
  artist: string;
  name: string;
  imageSource: string;
  year: string;
  genre: string;
  colors: string[];
  dimensions: {
    height: number;
    width: number;
    type: string;
  };
}

type ArtPiecePreviewProps = {
  piece: IPiece;
  handleToggleFavorite: (slug: string) => {};
  artPiecesInfo: string[];
};

export function ArtPiecePreview({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}: ArtPiecePreviewProps) {
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
