import { useRouter } from "next/router";
import { ArtPieceDetails } from "../../components";

export default function DetailsPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  // console.log("Slug: ", artPiecesInfo);

  const selectedImage = pieces.find((piece) => piece.slug === slug);
  if (!selectedImage) {
    return;
  }

  return (
    <div>
      <ArtPieceDetails
        image={selectedImage.imageSource}
        title={selectedImage.name}
        artist={selectedImage.artist}
        slug={slug}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
