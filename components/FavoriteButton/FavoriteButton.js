// import Image from "next/image";
import FavoriteIcon from "../../assets/heart.svg";
import { IconHeart } from "..";
import styled from "styled-components";
// import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

let isFavorite = false;

// console.log(<IconHeart />);

// export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
export function FavoriteButton({ handleToggleFavorite, slug, artPiecesInfo }) {
  return (
    <>
      {/* <TestStyledHeart size={24} /> */}
      {artPiecesInfo.includes(slug) ? (
        // <IconHeart />
        <FilledFavoriteIcon
          // size={24}
          onClick={() => handleToggleFavorite(slug)}
        />
      ) : (
        // <IconHeart />
        // <UnfilledFavoriteIcon
        <TestStyledHeart
          className="test"
          size={40}
          onClick={() => handleToggleFavorite(slug)}
        />
      )}
    </>
  );
}

const TestStyledHeart = styled(IconHeart)`
  position: absolute;
  top: 25px;
  right: 25px;
  /* stroke: crimson; */
  stroke: green;
  stroke-width: 0.2rem;
  fill: transparent;

  &:hover {
    fill: crimson;
    cursor: pointer;
  }
`;

/* const FilledFavoriteIcon = styled(IconHeart)` */
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

/* const UnfilledFavoriteIcon = styled(IconHeart)` */
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
