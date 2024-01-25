import styled from "styled-components";
import Link from "next/link";

export const LegalContainer = styled.div`
  background-color: var(--main-color2);
  margin-top: 1.5rem;
  margin-bottom: calc(1.5rem + 3.4rem);
  padding: 3rem;
  width: 75vw;
  max-width: 50rem;
  border-radius: 2rem;
`;

export const LegalLink = styled(Link)`
  color: var(--accent-color1);
`;

export const Country = styled.span`
  display: block;
  font-size: 0.85rem;
  color: #666;

  &::before {
    content: "Germany";
  }
`;
