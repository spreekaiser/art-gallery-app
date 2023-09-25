import styled from "styled-components";
import { Navigation } from "..";

export function Layout({ children }) {
  return (
    <>
      <Content>{children}</Content>
      <Navigation />
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
`;
