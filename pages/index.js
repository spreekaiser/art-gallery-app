// import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import SpotLight from "../components/SpotLight";
import ArtPiecePreview from "../components/ArtPiecePreview";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      <SpotLight pieces={pieces} />
    </>
  );
}
