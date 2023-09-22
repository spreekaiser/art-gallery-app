import { ArtPieces } from "..";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

test("all art pieces are displayed as a list", () => {
  render(<ArtPieces />);
  const ulElement = screen.getByRole("list");
  expect(ulElement).toBeInTheDocument();
});

// test("each art piece's image is displayed", () => {
//   render(<ArtPieces />);
// });

// test("each art piece's title is displayed", () => {
//   render(<ArtPieces />);
// });

// test("each art piece's artist is displayed", () => {
//   render(<ArtPieces />);
// });
