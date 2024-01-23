import { HeartIconFilled, HeartIconUnfilled } from "./FavoriteButton.styles";
import { IFavoriteButtonProps as IProps } from "./FavoriteButton.d";
import { toggleFavorite } from "../../utils/toggleFavorite";
import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import { UseImmerLocalStorageStateType } from "../../types/types";

const heartIconSize = 36;

export function FavoriteButton({ slug }: IProps) {
  //
  const [artPiecesInfo, updateArtPiecesInfo]: UseImmerLocalStorageStateType =
    useImmerLocalStorageState("art-pieces-favorites", { defaultValue: [] });

  return (
    <>
      {artPiecesInfo?.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          //// onClick={() => handleToggleFavorite(slug)}
          onClick={() =>
            toggleFavorite(slug, artPiecesInfo, updateArtPiecesInfo)
          }
        />
      ) : (
        <HeartIconUnfilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          //// onClick={() => handleToggleFavorite(slug)}
          onClick={() =>
            toggleFavorite(slug, artPiecesInfo, updateArtPiecesInfo)
          }
        />
      )}
    </>
  );
}
