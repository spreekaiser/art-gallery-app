import Image from "next/image";
// import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";
// import Link from "next/link";
// import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";
import PieceContainer from "../PieceContainer";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <StyledListItem>
      <h3>{title}</h3>
      <PieceContainer
        title={title}
        image={image}
        slug={slug}
        artist={artist}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      ></PieceContainer>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  /* position: relative; */
`;
