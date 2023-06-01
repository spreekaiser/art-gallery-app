import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
// import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  // console.log(image);

  return (
    <StyledListItem>
      <h3>{title}</h3>
      <PieceContainer>
        <Image src={image} alt={title} width={360} height={240} />
        <FavoriteButton />
      </PieceContainer>
      <h4>@{artist}</h4>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  /* position: relative; */
`;

const PieceContainer = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
`;
