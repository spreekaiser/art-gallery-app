import Layout from "../components/Layout";
import GlobalStyle from "../styles";
// import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
let isFavorite = false;

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  // const { data } = useSWR("https://example-apis.vercel.app/api/art");

  // const [pieces, setPieces] = useState([]);

  // userImmerLocalStorageState for isFavorite
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  if (!data) {
    return;
  }

  function handleToggleFavorite(slug) {
    // if artPieceSlug is in localStorage, delete it from localStorage
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
      isFavorite = false
      // else add artPieceSlug to localStorage
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
      isFavorite = true
    }
    console.log('isFavorite', isFavorite);
  }
  
  return (
    <>
      <Layout>
        <GlobalStyle />
        {/* <SWRConfig value={{ fetcher, refreshInterval: 10000 }}> */}
        <Component {...pageProps} pieces={data} handleToggleFavorite={handleToggleFavorite} artPiecesInfo={artPiecesInfo} />
        {/* </SWRConfig> */}
      </Layout>
    </>
  );
}
