import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  border: 20px inset darkgoldenrod;
  border-radius: 5px;
  box-shadow: 10px 10px 20px #333;

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
