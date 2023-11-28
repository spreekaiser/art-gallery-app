export type ArtPieceDetailsProps = {
  imageSource: string;
  name: string;
  artist: string;
  slug: string;
  colors: string[];
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
};
