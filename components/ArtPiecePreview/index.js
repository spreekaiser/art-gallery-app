import Image from "next/image";
// import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";
import Link from "next/link";
import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";
import PieceContainer from "../PieceContainer";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  // console.log(image);

  // const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
  //   "art-pieces-info",
  //   {
  //     defaultValue: [],
  //   }
  // );

  // function handleToggleFavorite(slug) {
  //   if (artPiecesInfo.includes(slug)) {
  //     updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
  //   } else {
  //     updateArtPiecesInfo([...artPiecesInfo, slug]);
  //   }
  // }

  return (
    <StyledListItem>
      <h3>{title}</h3>
      <PieceContainer
        title={title}
        image={image}
        slug={slug}
        artist={artist}
      ></PieceContainer>
      <button onClick={() => handleToggleFavorite(slug)}>Geil!</button>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  /* position: relative; */
`;
