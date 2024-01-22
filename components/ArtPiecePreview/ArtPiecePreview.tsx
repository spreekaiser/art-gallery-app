import { ArtPieceContainer } from "..";
import { ArtPiecePreviewProps as Props } from "./ArtPiecePreview.d";
import { StyledListItem } from "./ArtPiecePreview.style";

export function ArtPiecePreview({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
  touchedArtPiece,
  setTouchedArtPiece,
}: Props) {
  return (
    <StyledListItem>
      <h3>{piece.name}</h3>
      <ArtPieceContainer
        {...piece}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        touchedArtPiece={touchedArtPiece}
        setTouchedArtPiece={setTouchedArtPiece}
      ></ArtPieceContainer>
    </StyledListItem>
  );
}
