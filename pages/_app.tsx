import store from "../store";
import GlobalStyle from "../styles";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { IApiError, IPiece } from "../types/types";
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

  // error handling
  if (exampleDataError) return renderErrorMessage(exampleDataError, "example");
  if (carloDataError) return renderErrorMessage(carloDataError, "carlo");
  if (!pieces.length) return;

  return (
    <>
      <Provider store={store}>
        <Layout>
          <GlobalStyle />
          <Popup trigger="load" />
          <AlarmOverlay />
          <Component {...pageProps} pieces={pieces} isLoading={isLoading} />
        </Layout>
      </Provider>
    </>
  );
}
