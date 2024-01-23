import store from "../store";
import GlobalStyle from "../styles";
import type { AppProps } from "next/app";
import useSWR from "swr";
// import { useImmerLocalStorageState } from "../lib/hooks/useImmerLocalStorageState";
// import { Draft } from "immer";
import {
  // ArtPiecesInfoType,
  // UpdateArtPiecesInfoType,
  IApiError,
  IPiece,
} from "../types/types";
import { Layout, AlarmOverlay, Popup } from "../components";
import { fetcher, renderErrorMessage } from "../utils/api";
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

  // userImmerLocalStorageState for isFavorite
  // const [artPiecesInfo, updateArtPiecesInfo]: [
  //   ArtPiecesInfoType,
  //   UpdateArtPiecesInfoType
  // ] = useImmerLocalStorageState("art-pieces-favorites", { defaultValue: [] });

  // error handling
  if (exampleDataError) return renderErrorMessage(exampleDataError, "example");
  if (carloDataError) return renderErrorMessage(carloDataError, "carlo");
  if (!pieces.length) return;

  // function handleToggleFavorite(
  //   artPiecesInfo: ArtPiecesInfoType,
  //   updateArtPiecesInfo: UpdateArtPiecesInfoType,
  //   slug: string
  // ): void {
  //   if (artPiecesInfo.includes(slug)) {
  //     updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
  //   } else {
  //     updateArtPiecesInfo([...artPiecesInfo, slug]);
  //   }
  // }

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
            // artPiecesInfo={artPiecesInfo}
            isLoading={isLoading}
          />
        </Layout>
      </Provider>
    </>
  );
}
