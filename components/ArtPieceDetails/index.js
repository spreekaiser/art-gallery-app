import Image from "next/image";
import PieceContainer from "../ArtPiecePreview";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({ pieces }) {
  return (
    <>
      <h2>{title}</h2>
      <PieceContainer>
        <Image src={image} alt={title} width={359} height={240} />
        <FavoriteButton />
      </PieceContainer>
      <h3>@{artist}</h3>
    </>
  );
}
