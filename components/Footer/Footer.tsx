import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledDiv>
      {/* <StyledLink href="/legal#imprint">Imprint</StyledLink> */}
      <StyledLink href="/imprint">Imprint</StyledLink>
      <span>Made with 🍕 in Kreuzkölln</span>
      <StyledLink href="/privacy">Privacy</StyledLink>
    </StyledDiv>
  );
}

const StyledLink = styled(Link)`
  color: black;

  /* &.anchored-link:target { */
  /* &section:target { */
  /* display: block; */
  /* padding-top: 50px; */
  /* margin-top: -550px; */
  /* background-color: gold; */
  /* } */
`;

const StyledDiv = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--main-color2);
  background-color: var(--accent-color1);
  text-align: center;
  width: 100%;

  padding: 1rem 2.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    a {
      /* margin: 0; */
    }
  }
  @media (max-width: 640px) {
    /* justify-content: center; */
  }
`;
