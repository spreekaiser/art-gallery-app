// import Link from "next/link";
import {
  StyledNavbar,
  StyledPageTitle,
  StyledPageTitleLink,
} from "./Navigation.style";
import { BurgerMenu } from "../../components";

export function Navigation() {
  return (
    <>
      <StyledNavbar>
        <StyledPageTitleLink href="/">
          <StyledPageTitle>Art Gallery</StyledPageTitle>
        </StyledPageTitleLink>
        <BurgerMenu />
      </StyledNavbar>
    </>
  );
}
