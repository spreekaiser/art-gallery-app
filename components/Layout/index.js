import styled from "styled-components";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Content>{children}</Content>
      <Navigation />
    </div>
  );
}

const Content = styled.div``;
