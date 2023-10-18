import Image from "next/image";
import { CommentForm, Comments, FavoriteButton } from "../";
import { StyledListItem } from "../ArtPiecePreview/ArtPiecePreview";
import { StyledImageContainer } from "../ArtPieceDetails/ArtPieceDetails.style";

type ArtPieceDetailsProps = {
  imageSource: string;
  name: string;
  artist: string;
  slug: string;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
};

export function ArtPieceDetails({
  imageSource: imageURL,
  name,
  artist,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}: ArtPieceDetailsProps) {
  return (
    <StyledListItem>
      <h3>{name}</h3>
      <div className="favoriteDiv">
        <StyledImageContainer>
          <Image src={imageURL} alt={name} width={360} height={240} />
          <FavoriteButton
            slug={slug}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </StyledImageContainer>
      </div>
      <h4>by {artist}</h4>
      <Comments title={name} />
      <CommentForm title={name} />
    </StyledListItem>
  );
}
