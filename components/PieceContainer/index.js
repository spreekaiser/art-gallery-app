import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

export default function PieceContainer({ title, image }) {
  return (
    <StyledContainer>
      <Image src={image} alt={title} width={359} height={240} />
      <FavoriteButton />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
`;
