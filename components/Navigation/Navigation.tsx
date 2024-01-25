// import Link from "next/link";
import { Navbar, PageTitle, PageTitleLink } from "./Navigation.style";
import { BurgerMenu } from "../../components";

export function Navigation() {
  return (
    <>
      <Navbar>
        <PageTitleLink href="/">
          <PageTitle>Art Gallery</PageTitle>
        </PageTitleLink>
        <BurgerMenu />
      </Navbar>
    </>
  );
}
