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
  const {
    data: exampleData,
    isLoading: isLoadingExampleData,
    error: exampleDataError,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  const {
    data: carloData,
    isLoading: isLoadingCarloData,
    error: carloDataError,
  } = useSWR("https://carlo-api.vercel.app", fetcher);

  const pieces = [...(exampleData || []), ...(carloData || [])];
  const isLoading = isLoadingExampleData || isLoadingCarloData;

  const [isAlarm, setIsAlarm] = useState(false);
  const [touchedArtPiece, setTouchedArtPiece] = useState<string | null>(null);

  // userImmerLocalStorageState for isFavorite
  const [artPiecesInfo, updateArtPiecesInfo]: [
    ArtPiecesInfoType,
    (updater: string[] | ((draft: Draft<ArtPiecesInfoType>) => void)) => void
  ] = useImmerLocalStorageState("art-pieces-favorites", { defaultValue: [] });

  if (exampleDataError) {
    const error = exampleDataError;
    return <div>Error fetching the example data: {error.message}</div>;
  }
  if (carloDataError) {
    const error = carloDataError;
    return <div>Error fetching the example data: {error.message}</div>;
  }
  if (!pieces.length) return;

  function handleToggleFavorite(slug: string): void {
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
    }
  }

  function handleTouch(slug: string) {
    // if no scrollbar visible, don't show one during animation
    const isScrollbarVisible =
      window.innerWidth > document.documentElement.clientWidth;
    if (!isScrollbarVisible) {
      document.body.style.overflow = "hidden";
    }

    setIsAlarm(true);
    setTouchedArtPiece(slug);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        {/* <Popup trigger="load" /> */}
        <AlarmOverlay isAlarm={isAlarm} setIsAlarm={setIsAlarm} />
        <Component
          {...pageProps}
          pieces={pieces}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          isLoading={isLoading}
          isAlarm={isAlarm}
          setIsAlarm={setIsAlarm}
          handleTouch={handleTouch}
          touchedArtPiece={touchedArtPiece}
          setTouchedArtPiece={setTouchedArtPiece}
        />
      </Layout>
    </>
  );
}
