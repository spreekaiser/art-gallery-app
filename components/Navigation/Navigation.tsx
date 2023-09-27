import Link from "next/link";
import { StyledNavbar } from "./Navigation.style";

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
