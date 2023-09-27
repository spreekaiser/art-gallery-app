import { ArtPieces } from "..";
import { ArtPieceContainer } from "..";
import { ArtPiecePreview } from "..";
import { Navigation } from "..";
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

test("Each art piece's title is displayed", () => {
  render(<ArtPiecePreview />);
  const title = screen.getByRole("heading");
  // const title = screen.getByRole("heading", {
  // name: /Orange Red and Green Abstract Painting/i,
  //// name: /bla/i,
  // });
  expect(title).toBeInTheDocument();
});

// test("teset", () => {
//   render(<Navigation />);
//   const link = screen.getByRole("link", { name: /spotligh/i });
//   expect(link).toBeInTheDocument();
// });

// test("Each art piece's artist is displayed", () => {
//   render(<ArtPieces />);
// });
