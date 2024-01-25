import { Navigation, Footer } from "..";
import { Content, StyledHeartBlob } from "./Layout.style";
import { ILayoutProps as IProps } from "./Layout.d";

export function Layout({ children }: IProps) {
  return (
    <>
      <Navigation />
      <StyledHeartBlob />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
