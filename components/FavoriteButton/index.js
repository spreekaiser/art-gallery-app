// import Image from "next/image";
import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";
// import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

let isFavorite = false;

// export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
export default function FavoriteButton({
  handleToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <>
      {artPiecesInfo.includes(slug) ? (
        <FilledFavoriteIcon onClick={() => handleToggleFavorite(slug)} />
      ) : (
        <UnfilledFavoriteIcon onClick={() => handleToggleFavorite(slug)} />
      )}
    </>
  );
}

const FilledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 25px;
  right: 25px;
  stroke: white;
  stroke: crimson;
  stroke-width: 0.2rem;
  fill: crimson;

  height: 40px;
  width: 40px;

  &:hover {
    fill: crimson;
    cursor: pointer;
  }
`;
const UnfilledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 25px;
  right: 25px;
  stroke: white;
  stroke: crimson;
  stroke-width: 0.2rem;
  fill: transparent;

  height: 40px;
  width: 40px;

  &:hover {
    fill: crimson;
    cursor: pointer;
  }
`;

const StyledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 25px;
  right: 25px;
  stroke: white;
  stroke: crimson;
  stroke-width: 0.2rem;
  /* fill: transparent; */
  fill: ${({ isfavorite }) =>
    isfavorite === "true" ? "yellow" : "transparent"};

  height: 40px;
  width: 40px;

  &:hover {
    fill: crimson;
    cursor: pointer;
  }
`;
