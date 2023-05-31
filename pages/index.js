import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";

export default function HomePage() {
  // const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  const { data } = useSWR("https://example-apis.vercel.app/api/art");
  if (!data) {
    return;
  }

  console.log(data[0].artist);

  return (
    <>
      <ArtPieces pieces={data} />
      <ul>
        {data.map((piece) => {
          return (
            <ArtPiecePreview
              key={piece.id}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          );
        })}
      </ul>
    </>
  );
}
