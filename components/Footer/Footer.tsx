import { FooterContainer, FooterLink } from "./Footer.style";

export function Footer() {
  return (
    <FooterContainer>
      <FooterLink href="/imprint">Imprint</FooterLink>
      <span>Made with 🍕 in Kreuzkölln</span>
      <FooterLink href="/privacy">Privacy</FooterLink>
    </FooterContainer>
  );
}
