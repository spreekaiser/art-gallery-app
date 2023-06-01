import Layout from "../components/Layout";
import GlobalStyle from "../styles";
// import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect, useState } from "react";
// import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  // const { data } = useSWR("https://example-apis.vercel.app/api/art");

  // react context api ODER zustand

  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    setPieces(data);
  }, [data]);

  if (!pieces) {
    return;
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        {/* <SWRConfig value={{ fetcher, refreshInterval: 10000 }}> */}
        <Component {...pageProps} pieces={pieces} />
        {/* </SWRConfig> */}
      </Layout>
    </>
  );
}
