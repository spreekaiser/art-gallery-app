import { ArtPiecesInfoType, UpdateArtPiecesInfoType } from "../types/types";

// export function handleToggleFavorite(
export function toggleFavorite(
  slug: string,
  artPiecesInfo: ArtPiecesInfoType,
  updateArtPiecesInfo: UpdateArtPiecesInfoType
): void {
  if (artPiecesInfo.includes(slug)) {
    updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
  } else {
    updateArtPiecesInfo([...artPiecesInfo, slug]);
  }
}
