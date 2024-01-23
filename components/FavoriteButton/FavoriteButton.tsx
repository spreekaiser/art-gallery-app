import { HeartIconFilled, HeartIconUnfilled } from "./FavoriteButton.styles";
import { IFavoriteButtonProps as IProps } from "./FavoriteButton.d";
import { toggleFavorite } from "../../utils/toggleFavorite";
import { useAppDispatch } from "../../lib/hooks/storeHooks";
import {
  setArtPiecesInfoState,
  useArtPiecesInfo,
} from "../../store/artPiecesInfoSlice/artPiecesInfoSlice";

const heartIconSize = 36;

export function FavoriteButton({ slug }: IProps) {
  const { artPiecesInfo, updateArtPiecesInfo } = useArtPiecesInfo();
  const dispatch = useAppDispatch();

  return (
    <>
      {artPiecesInfo?.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          onClick={() =>
            toggleFavorite(
              slug,
              artPiecesInfo,
              updateArtPiecesInfo,
              dispatch,
              setArtPiecesInfoState
            )
          }
        />
      ) : (
        <HeartIconUnfilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          onClick={() =>
            toggleFavorite(
              slug,
              artPiecesInfo,
              updateArtPiecesInfo,
              dispatch,
              setArtPiecesInfoState
            )
          }
        />
      )}
    </>
  );
}
