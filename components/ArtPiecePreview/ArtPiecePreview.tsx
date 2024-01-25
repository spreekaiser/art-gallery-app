import { ArtPieceContainer } from "..";
import { IPiece } from "../../types/types";
import { StyledListItem } from "./ArtPiecePreview.style";

export function ArtPiecePreview({ piece }: { piece: IPiece }) {
  return (
    <StyledListItem>
      <h3>{piece.name}</h3>
      <ArtPieceContainer piece={piece}></ArtPieceContainer>
    </StyledListItem>
  );
}
