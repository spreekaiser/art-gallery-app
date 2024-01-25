import { HeartIconFilled, HeartIconUnfilled } from "./FavoriteButton.style";
import { toggleFavorite } from "../../utils/toggleFavorite";
import { useAppDispatch } from "../../lib/hooks/storeHooks";
import {
  setArtPiecesInfoState,
  useArtPiecesInfo,
} from "../../store/artPiecesInfo/artPiecesInfoSlice";

const heartIconSize = 36;

export function FavoriteButton({ slug }: { slug: string }) {
  const { artPiecesInfo, updateArtPiecesInfo } = useArtPiecesInfo();
  const dispatch = useAppDispatch();

  return (
    <>
      {artPiecesInfo?.includes(slug) ? (
        <HeartIconFilled
          className="mandatoryClassName" // Styled Comp doesn't work here without className
          size={heartIconSize}
          onClick={(event) =>
            toggleFavorite(
              slug,
              artPiecesInfo,
              updateArtPiecesInfo,
              dispatch,
              setArtPiecesInfoState,
              event
            )
          }
          onTouchStart={(event) =>
            toggleFavorite(
              slug,
              artPiecesInfo,
              updateArtPiecesInfo,
              dispatch,
              setArtPiecesInfoState,
              event
            )
          }
        />
      ) : (
        <HeartIconUnfilled
          className="mandatoryClassName" // Styled Comp doesn't work here without className
          size={heartIconSize}
          onClick={(event) =>
            toggleFavorite(
              slug,
              artPiecesInfo,
              updateArtPiecesInfo,
              dispatch,
              setArtPiecesInfoState,
              event
            )
          }
          onTouchStart={(event) =>
            toggleFavorite(
              slug,
              artPiecesInfo,
              updateArtPiecesInfo,
              dispatch,
              setArtPiecesInfoState,
              event
            )
          }
        />
      )}
    </>
  );
}
