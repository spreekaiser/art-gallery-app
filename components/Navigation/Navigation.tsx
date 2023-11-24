// import Link from "next/link";
import { StyledNavbar, StyledPageTitle } from "./Navigation.style";
import { BurgerMenu } from "../../components";

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
