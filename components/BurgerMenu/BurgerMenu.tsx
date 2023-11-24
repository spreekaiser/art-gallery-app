// import React, { useState } from "react";
import Link from "next/link";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Burger onClick={toggleMenu}>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

const rotateOut = keyframes`
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Burger = styled.div`
  width: 2.1rem;
  height: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 3px;
  background-color: var(--main-color2);
  transition: all 0.3s ease-in-out;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
    background-color: ${({ isOpen }) =>
      isOpen ? "var(--accent-color2)" : "var(--main-color2)"};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"};
    background-color: ${({ isOpen }) =>
      isOpen ? "red" : "var(--main-color2)"};
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: var(--accent-color1);
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

const MenuItem = styled(Link)`
  display: block;
  margin-bottom: 1rem;
`;
