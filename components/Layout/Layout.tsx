import { ReactNode } from "react";
import { Navigation } from "..";
import { Content, StyledHeartBlob } from "./Layout.style";

interface ILayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Content>{children}</Content>
      <StyledHeartBlob />
      <Navigation />
    </>
  );
}
