import { ArtPieceContainer } from "..";
import { IPiece } from "../../types/types";
import { ListItem } from "./ArtPiecePreview.style";

export function ArtPiecePreview({ piece }: { piece: IPiece }) {
  return (
    <ListItem>
      <h3>{piece.name}</h3>
      <ArtPieceContainer piece={piece}></ArtPieceContainer>
    </ListItem>
  );
}
