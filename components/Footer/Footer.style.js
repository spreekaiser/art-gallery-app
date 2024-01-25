import Link from "next/link";
import styled from "styled-components";

export const FooterLink = styled(Link)`
  color: var(--main-color2);

  &:hover {
    color: var(--accent-color2);
  }
`;

export const FooterContainer = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--main-color2);
  background-color: var(--accent-color1);
  text-align: center;
  width: 100%;

  padding: 1rem 2.5rem;
  gap: 1rem;
`;
