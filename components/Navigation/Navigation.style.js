import Link from "next/link";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--accent-color1);
  text-align: center;
  width: 100%;

  padding: 1rem 2.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    a {
      /* margin: 0; */
    }
  }
  @media (max-width: 640px) {
    /* justify-content: center; */
  }
`;

export const StyledPageTitle = styled.h1`
  color: var(--main-color2);
  margin: 0;
  font-style: italic;
`;

export const StyledPageTitleLink = styled(Link)`
  background-color: none !important;
  color: red;
`;
