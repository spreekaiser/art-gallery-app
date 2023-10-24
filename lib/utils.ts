import { PieceType } from "./utils.d";

export function getRandomNumber(pieces: PieceType[]): number {
  return Math.round(Math.random() * (pieces.length - 1));
}
