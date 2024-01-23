import { HeartIconFilled, HeartIconUnfilled } from "./FavoriteButton.styles";
import { IFavoriteButtonProps as IProps } from "./FavoriteButton.d";
import { toggleFavorite } from "../../utils/toggleFavorite";

const heartIconSize = 36;

export function FavoriteButton({ slug, artPiecesInfo }: IProps) {
  return (
    <>
      {artPiecesInfo?.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          //// onClick={() => handleToggleFavorite(slug)}
          onClick={() => toggleFavorite(slug)}
        />
      ) : (
        <HeartIconUnfilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          //// onClick={() => handleToggleFavorite(slug)}
          onClick={() => toggleFavorite(slug)}
        />
      )}
    </>
  );
}
