type PieceType = {
  slug: string;
  artist: string;
  name: string;
  imageSource: string;
  year: string;
  genre: string;
  colors: string[];
  dimensions: {
    height: number;
    width: number;
    type: string;
  };
};

export function getRandomNumber(pieces: PieceType[]): number {
  return Math.round(Math.random() * (pieces.length - 1));
}
