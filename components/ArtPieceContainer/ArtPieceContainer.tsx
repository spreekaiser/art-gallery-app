import { FavoriteButton, ArrowButton } from "..";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/storeHooks";
import { selectAlarm, startAlarm } from "../../store/alarm/alarmSlice";
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
  //// handleTouch,
  touchedArtPiece,
  setTouchedArtPiece,
}: Props) {
  //
  const isAlarm = useAppSelector(selectAlarm);
  const dispatch = useAppDispatch();

  return (
    <>
      <HingeAnimation
        className="favoriteDiv"
        //// onClick={() => handleTouch(slug, setIsAlarm, setTouchedArtPiece)}
        onClick={() => dispatch(startAlarm())}
        clicked={isAlarm && touchedArtPiece === slug}
        onAnimationEnd={() => setTouchedArtPiece(null)}
      >
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
        <StyledImage src={imageURL} alt={name} width={360} height={240} />
      </HingeAnimation>
      <h4>by {artist}</h4>
      <StyledLink href={`art-pieces/${slug}`}>
        <ArrowButton width={16}>Take a closer look</ArrowButton>
      </StyledLink>
    </>
  );
}
