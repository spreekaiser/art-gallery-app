import { useState } from "react";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hooks/useImmerLocalStorageState";
import { Draft } from "immer";
import { Layout, AlarmOverlay, Popup } from "../components";
import GlobalStyle from "../styles";
import { ArtPiecesInfoType } from "../types/types";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { data: pieces, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [isAlarm, setIsAlarm] = useState(false);

  // userImmerLocalStorageState for isFavorite
  const [artPiecesInfo, updateArtPiecesInfo]: [
    ArtPiecesInfoType,
    (updater: string[] | ((draft: Draft<ArtPiecesInfoType>) => void)) => void
  ] = useImmerLocalStorageState("art-pieces-favorites", { defaultValue: [] });

  if (!pieces) return;

  function handleToggleFavorite(slug: string): void {
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
    }
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Popup
          trigger="load"
          delay={1000}
          content="Hey! Look, DON'T TOUCH, alright?!"
          watchman="sleepy"
          buttonText="I promise! 🤥"
        />
        <AlarmOverlay isAlarm={isAlarm} setIsAlarm={setIsAlarm} />
        <Component
          {...pageProps}
          pieces={pieces}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          isLoading={isLoading}
          setIsAlarm={setIsAlarm}
        />
      </Layout>
    </>
  );
}
