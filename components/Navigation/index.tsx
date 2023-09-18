import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <StyledNavbar>
        <Link href="/">Spotlight</Link>
        <Link href="/art-pieces">Art Pieces</Link>
        <Link href="/favorites">Favorites</Link>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  background-color: salmon;
  text-align: center;

  width: 100%;

  a {
    padding: 1rem 2rem;
    border: 1px solid black;
    background-color: lightblue;
    font-weight: bold;
    &:hover {
      color: white;
      background-color: gold;
    }
  }
`;
