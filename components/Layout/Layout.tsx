import { Navigation } from "..";
import { Content, StyledHeartBlob } from "./Layout.style";
import { ILayoutProps as IProps } from "./Layout.d";

export function Layout({ children }: IProps) {
  return (
    <>
      <Content>{children}</Content>
      <StyledHeartBlob />
      <Navigation />
    </>
  );
}
