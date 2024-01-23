import { HeartIconFilled, HeartIconUnfilled } from "./FavoriteButton.styles";
import { IFavoriteButtonProps as IProps } from "./FavoriteButton.d";
import { toggleFavorite } from "../../utils/toggleFavorite";
import { useAppDispatch } from "../../lib/hooks/storeHooks";
import { useDispatch } from "react-redux";
import {
  setArtPiecesInfoState,
  useArtPiecesInfo,
} from "../../store/artPiecesInfoSlice/artPiecesInfoSlice";
// import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
// import { UseImmerLocalStorageStateType } from "../../types/types";

const heartIconSize = 36;

export function FavoriteButton({ slug }: IProps) {
  //
  // const [artPiecesInfo, updateArtPiecesInfo]: UseImmerLocalStorageStateType =
  // useImmerLocalStorageState("art-pieces-favorites", { defaultValue: [] });
  //
  const { artPiecesInfo, updateArtPiecesInfo } = useArtPiecesInfo();
  const dispatch = useDispatch();

  return (
    <>
      {artPiecesInfo?.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          //// onClick={() => handleToggleFavorite(slug)}
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
          //// onClick={() => handleToggleFavorite(slug)}
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
