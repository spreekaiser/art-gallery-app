// import React, { useState } from "react";
import { useState } from "react";
import { Burger, Line, Menu, MenuItem } from "./BurgerMenu.style";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
      </Burger>
      <Menu isOpen={isOpen}>
        <MenuItem href="/">Spotlight</MenuItem>
        <MenuItem href="/art-pieces">Art Pieces</MenuItem>
        <MenuItem href="/favorites">Favorites</MenuItem>
      </Menu>
    </>
  );
}
