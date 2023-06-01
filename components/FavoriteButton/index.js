import Image from "next/image";
import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <button>
        <StyledFavoriteIcon onClick={() => alert("huhu")} />
      </button>
    </>
  );
}

const StyledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1;
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
