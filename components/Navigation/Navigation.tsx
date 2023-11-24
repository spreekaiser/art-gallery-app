import Link from "next/link";
import { StyledNavbar } from "./Navigation.style";
import { BurgerMenu } from "../../components";
import styled from "styled-components";

export function Navigation() {
  return (
    <>
      <StyledNavbar>
        {/* <StyledPageTitleLink href="/"> */}
        <StyledPageTitle>Art Gallery</StyledPageTitle>
        {/* </StyledPageTitleLink> */}
        <BurgerMenu />
      </StyledNavbar>
    </>
  );
}

export const StyledPageTitle = styled.h1`
  color: white;
  margin: 0;
  font-style: italic;
`;
