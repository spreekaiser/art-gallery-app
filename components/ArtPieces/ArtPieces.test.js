import { ArtPieces } from "..";
import { ArtPieceContainer } from "..";
import { ArtPiecePreview } from "..";
import { render, screen } from "@testing-library/react";
import { demoPiece } from "../../_testData/testData";
import "jest-styled-components";

it("should be displayed all art pieces as a list", () => {
  render(<ArtPieces />);
  const ulElement = screen.getByRole("list");
  expect(ulElement).toBeInTheDocument();
});

it("should be displayed each art piece's image", () => {
  const handleToggleFavorite = jest.fn();
  const artPiecesInfo = [];

  render(
    <ArtPiecePreview
      // key={bla.slug}
      piece={demoPiece}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
  const imageElement = screen.getByRole("img", {
    name: /Orange Red and Green Abstract Painting/i,
  });
  expect(imageElement).toBeInTheDocument();
});

it("should be displayed each art piece's title", () => {
  const handleToggleFavorite = jest.fn();
  const artPiecesInfo = [];

  render(
    <ArtPiecePreview
      // key={bla.slug}
      piece={demoPiece}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
  const headerElement = screen.getByRole("heading", {
    name: /Orange Red and Green Abstract Painting/i,
  });
  expect(headerElement).toBeInTheDocument();
});

// test("teset", () => {
//   render(<Navigation />);
//   const link = screen.getByRole("link", { name: /spotligh/i });
//   expect(link).toBeInTheDocument();
// });

// test("Each art piece's artist is displayed", () => {
//   render(<ArtPieces />);
// });
