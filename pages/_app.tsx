import { useState } from "react";
import GlobalStyle from "../styles";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hooks/useImmerLocalStorageState";
import { Draft } from "immer";
import { ArtPiecesInfoType, IApiError, IPiece } from "../types/types";
import { Layout, AlarmOverlay, Popup } from "../components";
import { fetcher } from "./utils/fetcher";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const {
    data: exampleData,
    error: exampleDataError,
    isLoading: isLoadingExampleData,
  } = useSWR<IPiece[], IApiError>(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  // } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  const {
    data: carloData,
    error: carloDataError,
    isLoading: isLoadingCarloData,
    // } = useSWR("https://carlo-api.vercel.app", fetcher);
  } = useSWR<IPiece[], IApiError>("https://carlo-api.vercel.app", fetcher);

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
    return (
      <p>
        Uh oh, something went wrong fetching the example data... {error.message}
      </p>
    );
  }
  if (carloDataError) {
    const error = carloDataError;
    <p>
      Uh oh, something went wrong fetching the carlo data... {error.message}
    </p>;
  }
  if (!pieces.length) return;

  function handleToggleFavorite(slug: string): void {
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
    }
  }

  function handleTouch(slug: string): void {
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
        <Popup trigger="load" />
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
