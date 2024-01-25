import { Navigation } from "..";
import { Content, StyledHeartBlob } from "./Layout.style";
import { ILayoutProps as IProps } from "./Layout.d";
import Footer from "../Footer/Footer";

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
