import { Navigation } from "..";
import { Content, StyledHeartBlob } from "./Layout.style";

export function Layout({ children }) {
  return (
    <>
      <Content>{children}</Content>
      <StyledHeartBlob />
      <Navigation />
    </>
  );
}
