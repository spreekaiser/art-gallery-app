import store from "../store";
import GlobalStyle from "../styles";
import type { AppProps } from "next/app";
import { Layout, AlarmOverlay, Popup } from "../components";
import { renderErrorMessage, useFetchData } from "../utils/api";
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
  } = useFetchData("https://example-apis.vercel.app/api/art");
  const {
    data: carloData,
    error: carloDataError,
    isLoading: isLoadingCarloData,
  } = useFetchData("https://carlo-api.vercel.app");

  // data merging
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
