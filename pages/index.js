import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import SpotLight from "../components/SpotLight";
import ArtPiecePreview from "../components/ArtPiecePreview";

export default function HomePage() {
  // const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  const { data } = useSWR("https://example-apis.vercel.app/api/art");

  if (!data) {
    return;
  }

  // console.log(data[0].artist);

  return (
    <>
      <SpotLight pieces={data} />
      <ArtPieces pieces={data} />
    </>
  );
}
