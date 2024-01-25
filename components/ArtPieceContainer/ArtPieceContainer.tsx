import { FavoriteButton, ArrowButton } from "..";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/storeHooks";
import { selectAlarm, startAlarm } from "../../store/alarm/alarmSlice";
import {
  selectTouchedPiece,
  setTouchedPiece,
  resetTouchedPiece,
} from "../../store/touchedPiece/touchedPieceSlice";
import { IPiece } from "../../types/types";
import { handleTouch } from "../../utils/handleTouch";
import {
  StyledImage,
  StyledLink,
  HingeAnimation,
} from "./ArtPieceContainer.style";

export function ArtPieceContainer({ piece }: { piece: IPiece }) {
  const { name, artist, slug, imageSource: imageURL } = piece;
  const isAlarm = useAppSelector(selectAlarm);
  const touchedPiece = useAppSelector(selectTouchedPiece);
  const dispatch = useAppDispatch();

  return (
    <>
      <HingeAnimation
        onClick={(event) =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece, event)
        }
        onTouchStart={(event) =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece, event)
        }
        clicked={isAlarm && touchedPiece === slug}
        onAnimationEnd={() => resetTouchedPiece()}
      >
        <FavoriteButton slug={slug} />
        <StyledImage src={imageURL} alt={name} width={360} height={240} />
      </HingeAnimation>
      <h4>by {artist}</h4>
      <StyledLink href={`art-pieces/${slug}`}>
        <ArrowButton width={16}>Take a closer look</ArrowButton>
      </StyledLink>
    </>
  );
}
