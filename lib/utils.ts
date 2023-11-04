import { IPiece } from "../types.d";

export function getRandomNumber(pieces: IPiece[]): number {
  return Math.round(Math.random() * (pieces.length - 1));
}
