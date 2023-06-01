import Layout from "../components/Layout";
import GlobalStyle from "../styles";
// import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
// test
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  // const { data } = useSWR("https://example-apis.vercel.app/api/art");

  const [pieces, setPieces] = useState(data);
  // const [artPiecesInfo, setArtPiecesInfo] = useState(i)

  if (!data) {
    return;
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        {/* <SWRConfig value={{ fetcher, refreshInterval: 10000 }}> */}
        <Component {...pageProps} data={data} />
        {/* </SWRConfig> */}
      </Layout>
      {/* <Image
        src="/../../assets/heart.svg"
        width={100}
        height={100}
        alt="test"
      /> */}
    </>
  );
}
