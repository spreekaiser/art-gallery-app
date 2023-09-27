import { ArtPieces } from "..";
import { ArtPieceContainer } from "..";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces />);
  const ulElement = screen.getByRole("list");
  expect(ulElement).toBeInTheDocument();
});

/*
test("Each art piece's image is displayed", () => {
  render(<ArtPieceContainer />);
  // const image = screen.getByRole("img");
  const image = screen.getByRole("img", {
    name: /Orange Red and Green Abstract Painting/i,
  });
  expect(image).toBeInTheDocument();
});
*/

// test("each art piece's title is displayed", () => {
//   render(<ArtPieces />);
// });

// test("each art piece's artist is displayed", () => {
//   render(<ArtPieces />);
// });
