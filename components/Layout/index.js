import styled from "styled-components";
import Navigation from "../Navigation";

export default function Layout({ children, pieces }) {
  return (
    <div>
      <Content pieces={pieces}>{children}</Content>
      <Navigation />
    </div>
  );
}

const Content = styled.div`
  padding: 10%;
`;
