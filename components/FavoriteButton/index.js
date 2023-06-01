import Image from "next/image";
import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledFavoriteIcon />
    </>
  );
}

const StyledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 25px;
  right: 25px;

  stroke: white;
  stroke: crimson;
  stroke-width: 0.2rem;
  /* stroke-opacity: 0.7; */
  /* fill: crimson; */
  fill: transparent;

  height: 40px;
  width: 40px;

  &:hover {
    /* stroke: crimson; */
    fill: crimson;
    /* stroke: white; */
    /* stroke-width: 0.3rem; */
    cursor: pointer;
  }
`;
