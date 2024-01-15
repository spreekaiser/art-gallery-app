import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

interface IStyledImage {
  clicked: boolean;
  scrollable?: boolean;
  onAnimationEnd?: any;
}

export const StyledImage = styled(Image)`
  border: 20px inset darkgoldenrod;
  border-radius: 5px;
  box-shadow: 10px 10px 20px #333;
  /* z-index: 100; */

  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
`;

export const StyledLink = styled(Link)`
  margin-bottom: 1rem;

  &:hover {
    color: var(--main-color2);
    font-weight: bold;
  }
`;

const hingeAnimation = keyframes`
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    transform: rotate(80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    transform: rotate(60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  100% {
    transform: translateY(600px) rotate(80deg);
    transform-origin: top left;
    animation-timing-function: ease-in;
  }

`;

export const HingeAnimation = styled.div<IStyledImage>`
  animation: ${(props) => (props.clicked ? hingeAnimation : "none")} 3s ease-out;
  animation-iteration-count: 1;
  transform-origin: top left;
  z-index: ${(props) => (props.clicked ? 100 : 0)};
`;
