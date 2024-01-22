import store from "../store";
import { useState } from "react";
import GlobalStyle from "../styles";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hooks/useImmerLocalStorageState";
import { Draft } from "immer";
import { ArtPiecesInfoType, IApiError, IPiece } from "../types/types";
import { Layout, AlarmOverlay, Popup } from "../components";
import { fetcher, renderErrorMessage } from "../utils/api";
import { handleTouch } from "../utils/handleTouch";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // data fetch
  const {
    data: exampleData,
    error: exampleDataError,
    isLoading: isLoadingExampleData,
  } = useSWR<IPiece[], IApiError>(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const {
    data: carloData,
    error: carloDataError,
    isLoading: isLoadingCarloData,
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

  // error handling
  if (exampleDataError) return renderErrorMessage(exampleDataError, "example");
  if (carloDataError) return renderErrorMessage(carloDataError, "carlo");
  if (!pieces.length) return;

  function handleToggleFavorite(slug: string): void {
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
    }
  }

  return (
    <>
      <Provider store={store}>
        <Layout>
          <GlobalStyle />
          <Popup trigger="load" />
          <AlarmOverlay />
          <Component
            {...pageProps}
            pieces={pieces}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            isLoading={isLoading}
            handleTouch={handleTouch}
            touchedArtPiece={touchedArtPiece}
            setTouchedArtPiece={setTouchedArtPiece}
          />
        </Layout>
      </Provider>
    </>
  );
}
