import styled from "styled-components";
import { Navigation } from "..";

export function Layout({ children }) {
  return (
    <div>
      <Content>{children}</Content>
      <Navigation />
    </div>
  );
}

const Content = styled.div`
  padding: 10%;
`;
