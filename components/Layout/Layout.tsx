import { Navigation, Footer } from "..";
import { Content, HeartBlob } from "./Layout.style";
import { ILayoutProps as IProps } from "./Layout.d";

export function Layout({ children }: IProps) {
  return (
    <>
      <Navigation />
      <HeartBlob />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
