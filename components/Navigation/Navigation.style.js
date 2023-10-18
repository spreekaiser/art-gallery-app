import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--accent-color1);
  text-align: center;
  width: 100%;

  padding: 1rem 2.5rem;
  gap: 1rem;

  a {
    min-width: 11rem;
    padding: 1rem 3rem;
    margin: 0 1%;
    background-color: lightblue;
    font-weight: bold;

    &:hover {
      color: var(--main-color1);
      background-color: var(--accent-color2);
    }
    &:active {
      color: white;
    }
  }

  @media (max-width: 768px) {
    a {
      margin: 0;
    }
  }
  @media (max-width: 640px) {
    justify-content: center;
  }
`;
