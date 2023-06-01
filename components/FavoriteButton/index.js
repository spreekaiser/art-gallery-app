import Image from "next/image";
import FavoriteIcon from "../../assets/heart.svg";
import styled from "styled-components";
import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

// let isFavorite = false;
// export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
export default function FavoriteButton({ onToggleFavorite, slug }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  function handleToggleFavorite(slug) {
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
    }
  }

  return (
    <>
      {/* <StyledFavoriteIcon onClick={() => alert("huhu")} /> */}
      <StyledFavoriteIcon onClick={() => handleToggleFavorite(slug)} />
    </>
  );
}

const StyledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 25px;
  right: 25px;
  stroke: white;
  stroke: crimson;
  stroke-width: 0.2rem;
  /* fill: transparent; */
  fill: ${(props) => (props.isFavorite ? "crismon" : "transparent")};

  height: 40px;
  width: 40px;

  &:hover {
    fill: crimson;
    cursor: pointer;
  }
`;
