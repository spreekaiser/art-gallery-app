import { IconHeart } from "..";
import styled from "styled-components";

export const StyledHeartIcon = styled(IconHeart)`
  position: absolute;
  top: 25px;
  right: 25px;

  stroke: crimson;
  stroke-width: 0.15rem;

  &:hover {
    fill: crimson;
    transform: scale(1.15);
    cursor: pointer;
  }
  &:active {
    fill: white;
  }
`;

export const HeartIconFilled = styled(StyledHeartIcon)`
  fill: crimson;

  &:active {
    stroke: crimson;
  }
`;

export const HeartIconUnfilled = styled(StyledHeartIcon)`
  fill: transparent;

  &:active {
    stroke: white;
  }
`;
