import Link from "next/link";
import styled from "styled-components";

export function Navigation() {
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

  /* background-color: salmon; */
  /* background-color: burlywood; */
  /* background-color: darkslategray; */
  /* background-color: lightcoral; */
  /* background-color: lightblue; */
  /* background-color: lightseagreen; */
  /* background-color: lightslategray; */
  /* background-color: maroon; */
  /* background-color: purple; */
  /* background-color: rebeccapurple; */
  /* background-color: steelblue; */
  /* background-color: #004040; */
  /* background-color: teal; */
  /* background-color: #126d6d; */
  background-color: mediumvioletred;

  /* lsd */
  /* background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%); */

  /*//! rastamann */
  /* background: linear-gradient(red 0%, orange 25%, yellow 50%, green 75%); */

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
