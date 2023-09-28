import { Layout } from "../components";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
let isFavorite = false;

export default function App({ Component, pageProps }) {
  const { data: pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  // console.log(pieces);

  // userImmerLocalStorageState for isFavorite
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  if (!pieces) {
    return;
  }

  function handleToggleFavorite(slug) {
    // if artPieceSlug is in localStorage, delete it from localStorage
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
      isFavorite = false;
      // else add artPieceSlug to localStorage
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
      isFavorite = true;
    }
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={pieces}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </Layout>
    </>
  );
}
