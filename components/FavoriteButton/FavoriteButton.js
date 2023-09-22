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
        // <FilledFavoriteIcon
        <HeartIconFilled
          className="test"
          size={40}
          onClick={() => handleToggleFavorite(slug)}
        />
      ) : (
        // <IconHeart />
        // <UnfilledFavoriteIcon
        <HeartIconUnfilled
          className="test" // mandatory; doesn't work without className
          size={40}
          onClick={() => handleToggleFavorite(slug)}
        />
      )}
    </>
  );
}

const HeartIconUnfilled = styled(IconHeart)`
  position: absolute;
  top: 25px;
  right: 25px;
  fill: transparent;
  stroke: crimson;
  stroke-width: 0.15rem;

  &:hover {
    fill: crimson;
    transform: scale(1.2);
    cursor: pointer;
  }

  &:active {
    fill: white;
    stroke: white;
  }
`;

const HeartIconFilled = styled(IconHeart)`
  position: absolute;
  top: 25px;
  right: 25px;
  fill: crimson;
  stroke: crimson;
  stroke-width: 0.15rem;

  &:hover {
    fill: crimson;
    transform: scale(1.2);
    cursor: pointer;
  }

  &:active {
    fill: white;
    stroke: crimson;
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
