import { ArtPieceContainer } from "..";
import { IArtPiecePreviewProps as IProps } from "./ArtPiecePreview.d";
import { StyledListItem } from "./ArtPiecePreview.style";

export function ArtPiecePreview({ piece }: IProps) {
  return (
    <StyledListItem>
      <h3>{piece.name}</h3>
      <ArtPieceContainer {...piece}></ArtPieceContainer>
    </StyledListItem>
  );
}
