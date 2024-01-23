import { ArtPiecesInfoType, UpdateArtPiecesInfoType } from "../types/types";

// export function handleToggleFavorite(
export function toggleFavorite(
  artPiecesInfo: ArtPiecesInfoType,
  updateArtPiecesInfo: UpdateArtPiecesInfoType,
  slug: string
): void {
  if (artPiecesInfo.includes(slug)) {
    updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
  } else {
    updateArtPiecesInfo([...artPiecesInfo, slug]);
  }
}
