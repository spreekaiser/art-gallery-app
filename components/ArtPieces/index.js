export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return pieces.map((piece) => {
    return piece.name;
  });
}
