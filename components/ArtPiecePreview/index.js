import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
// import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";
import Link from "next/link";
import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  // console.log(image);

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  function handleToggleFavorite(slug) {
    //
    updateArtPiecesInfo([...artPiecesInfo, slug]);
  }

  return (
    <StyledListItem>
      <Link href={`art-pieces/${slug}`}>
        <h3>{title}</h3>
        <PieceContainer>
          <Image src={image} alt={title} width={360} height={240} />
          <FavoriteButton />
        </PieceContainer>
        <h4>@{artist}</h4>
      </Link>
      <button onClick={() => handleToggleFavorite(slug)}>Geil!</button>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  /* position: relative; */
`;

export const PieceContainer = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
`;
