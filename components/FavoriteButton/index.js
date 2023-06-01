import Image from "next/image";
// import favoriteIcon from "../../assets/heart.svg";
import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledFavoriteIcon />
      {/* <FavoriteIcon /> */}
    </>
  );
}

// const StyledImage = styled(Image)`
//   border: unset;
// `;

const StyledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 0;
  right: 0;

  stroke: white;
  fill: crimson;

  height: 50px;
  /* border: none;
  color: red; */
`;
