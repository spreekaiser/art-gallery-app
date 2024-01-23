import { ColorPalette, CommentForm, Comments, FavoriteButton } from "../";
import { StyledListItem } from "../ArtPiecePreview/ArtPiecePreview.style";
import { StyledImageContainer } from "../ArtPieceDetails/ArtPieceDetails.style";
import { ArtPieceDetailsProps as Props } from "./ArtPieceDetails.d";
import {
  StyledImage,
  HingeAnimation,
} from "../ArtPieceContainer/ArtPieceContainer.style";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/storeHooks";
import { selectAlarm, startAlarm } from "../../store/alarm/alarmSlice";
import { handleTouch } from "../../utils/handleTouch";
import {
  setTouchedPiece,
  resetTouchedPiece,
  selectTouchedPiece,
} from "../../store/touchedPiece/touchedPieceSlice";

export function ArtPieceDetails({
  imageSource: imageURL,
  name,
  artist,
  slug,
  colors,
  handleToggleFavorite,
  artPiecesInfo,
}: Props) {
  const isAlarm = useAppSelector(selectAlarm);
  const touchedPiece = useAppSelector(selectTouchedPiece);
  const dispatch = useAppDispatch();

  return (
    <StyledListItem>
      <h3>{name}</h3>
      <HingeAnimation
        className="favoriteDiv"
        onClick={() => handleTouch(slug, dispatch, startAlarm, setTouchedPiece)}
        onTouchStart={() =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece)
        }
        clicked={isAlarm && touchedPiece === slug}
        onAnimationEnd={() => resetTouchedPiece()}
      >
        <StyledImageContainer>
          <StyledImage src={imageURL} alt={name} width={360} height={240} />
          <FavoriteButton
            slug={slug}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </StyledImageContainer>
      </HingeAnimation>
      <h4>by {artist}</h4>
      <ColorPalette colors={colors} />
      <CommentForm title={name} />
      <Comments title={name} />
    </StyledListItem>
  );
}
