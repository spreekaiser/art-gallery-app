import { IconHeart } from "..";
import styled from "styled-components";

export function FavoriteButton({ handleToggleFavorite, slug, artPiecesInfo }) {
  return (
    <>
      {artPiecesInfo.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={40}
          onClick={() => handleToggleFavorite(slug)}
        />
      ) : (
        <HeartIconUnfilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={40}
          onClick={() => handleToggleFavorite(slug)}
        />
      )}
    </>
  );
}

const StyledHeartIcon = styled(IconHeart)`
  position: absolute;
  top: 25px;
  right: 25px;

  stroke: crimson;
  stroke-width: 0.15rem;

  &:hover {
    fill: crimson;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    fill: white;
  }
`;

const HeartIconUnfilled = styled(StyledHeartIcon)`
  fill: transparent;

  &:active {
    stroke: white;
  }
`;

const HeartIconFilled = styled(StyledHeartIcon)`
  fill: crimson;

  &:active {
    stroke: crimson;
  }
`;
