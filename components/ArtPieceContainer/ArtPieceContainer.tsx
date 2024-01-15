import { useState } from "react";
import { FavoriteButton, ArrowButton } from "..";
import { ArtPieceContainerProps as Props } from "./ArtPieceContainer.d";
import {
  StyledImage,
  StyledLink,
  HingeAnimation,
} from "./ArtPieceContainer.style";

export function ArtPieceContainer({
  artist,
  name,
  imageSource: imageURL,
  slug,
  handleToggleFavorite,
  artPiecesInfo,
  isAlarm,
  setIsAlarm,
}: Props) {
  //
  const [touchedArtPiece, setTouchedArtPiece] = useState<string | null>(null);

  function handleClick(id: string) {
    // if no scrollbar visible, don't show one during animation
    const isScrollbarVisible =
      window.innerWidth > document.documentElement.clientWidth;
    if (!isScrollbarVisible) {
      document.body.style.overflow = "hidden";
    }

    setIsAlarm(true);
    setTouchedArtPiece(id);
  }

  return (
    <>
      {/* <div  */}
      <HingeAnimation
        className="favoriteDiv"
        onClick={() => handleClick(slug)}
        clicked={isAlarm && touchedArtPiece === slug}
        onAnimationEnd={() => setTouchedArtPiece(null)}
      >
        <StyledImage
          src={imageURL}
          alt={name}
          width={360}
          height={240}
          // onClick={() => setIsAlarm(true)}
        />
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </HingeAnimation>
      <h4>by {artist}</h4>
      <StyledLink href={`art-pieces/${slug}`}>
        <ArrowButton width={16}>Take a closer look</ArrowButton>
      </StyledLink>
    </>
  );
}
