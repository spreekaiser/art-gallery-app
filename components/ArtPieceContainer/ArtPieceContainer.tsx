import { FavoriteButton, ArrowButton } from "..";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/storeHooks";
import { selectAlarm, startAlarm } from "../../store/alarm/alarmSlice";
import {
  selectTouchedPiece,
  setTouchedPiece,
  resetTouchedPiece,
} from "../../store/touchedPiece/touchedPieceSlice";
import { handleTouch } from "../../utils/handleTouch";
import { IArtPieceContainerProps as IProps } from "./ArtPieceContainer.d";
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
  artPiecesInfo,
}: IProps) {
  //
  const isAlarm = useAppSelector(selectAlarm);
  const touchedPiece = useAppSelector(selectTouchedPiece);
  const dispatch = useAppDispatch();

  return (
    <>
      <HingeAnimation
        className="favoriteDiv"
        onClick={(event) =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece, event)
        }
        onTouchStart={(event) =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece, event)
        }
        clicked={isAlarm && touchedPiece === slug}
        onAnimationEnd={() => resetTouchedPiece()}
      >
        <FavoriteButton slug={slug} artPiecesInfo={artPiecesInfo} />
        <StyledImage src={imageURL} alt={name} width={360} height={240} />
      </HingeAnimation>
      <h4>by {artist}</h4>
      <StyledLink href={`art-pieces/${slug}`}>
        <ArrowButton width={16}>Take a closer look</ArrowButton>
      </StyledLink>
    </>
  );
}
