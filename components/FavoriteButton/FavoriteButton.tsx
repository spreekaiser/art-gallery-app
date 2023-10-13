import { HeartIconFilled, HeartIconUnfilled } from "./FavoriteButton.styles";
import { Props } from "./FavoriteButton.d";

const heartIconSize = 36;

export function FavoriteButton({
  handleToggleFavorite,
  slug,
  artPiecesInfo,
}: Props) {
  return (
    <>
      {artPiecesInfo?.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          onClick={() => handleToggleFavorite(slug)}
        />
      ) : (
        <HeartIconUnfilled
          className="mandatoryClassName" //!  Styled Comp doesn't work here without className
          size={heartIconSize}
          onClick={() => handleToggleFavorite(slug)}
        />
      )}
    </>
  );
}
