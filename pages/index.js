// import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";

// export default function HomePage({ data }) {
export default function SpotlightPage({ data }) {
  // const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  // const { data } = useSWR("https://example-apis.vercel.app/api/art");

  // if (!data) {
  //   return;
  // }

  // console.log(data[0].artist);

  return (
    <>
      <ArtPieces pieces={data} />
      {/* <Spotlight pieces={data} /> */}
    </>
  );
}
