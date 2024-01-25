import Link from "next/link";
import styled from "styled-components";

export const Navbar = styled.nav`
  z-index: 999;
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
`;

export const PageTitle = styled.h1`
  color: var(--main-color2);
  margin: 0;
  font-style: italic;
`;

export const PageTitleLink = styled(Link)`
  background-color: none !important;
  color: red;
`;
