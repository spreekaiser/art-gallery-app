import { ArtPieceContainer } from "..";
import { ArtPiecePreviewProps as Props } from "./ArtPiecePreview.d";
import { StyledListItem } from "./ArtPiecePreview.style";

export function ArtPiecePreview({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
  setIsAlert,
}: Props) {
  return (
    <StyledListItem>
      <h3>{piece.name}</h3>
      <ArtPieceContainer
        {...piece}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        setIsAlert={setIsAlert}
      ></ArtPieceContainer>
    </StyledListItem>
  );
}
