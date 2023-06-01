import Image from "next/image";
// import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";
import Link from "next/link";
import PieceContainer from "../PieceContainer";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  // console.log(image);

  return (
    <StyledListItem>
      <h3>{title}</h3>
      <PieceContainer
        title={title}
        image={image}
        slug={slug}
        artist={artist}
      ></PieceContainer>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  /* position: relative; */
`;
