import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ArtPieces } from "..";
import { demoPieces } from "../../_testData/testData";

describe("Art Pieces Unit-Tests", () => {
  //
  it("should be displayed all art pieces as a list", () => {
    render(<ArtPieces />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
});

describe("Art Pieces Integration-Tests", () => {
  //
  it("should be displayed each art piece's image", () => {
    const handleToggleFavorite = jest.fn();
    const artPiecesInfo = [];

    render(
      <ArtPieces
        pieces={demoPieces}
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
      <ArtPieces
        pieces={demoPieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    );
    const headerElement = screen.getByRole("heading", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("should be displayed each art piece's artist", () => {
    const handleToggleFavorite = jest.fn();
    const artPiecesInfo = [];

    render(
      <ArtPieces
        pieces={demoPieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    );
    const headerElement = screen.getByRole("heading", {
      name: /Steve Johnson/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
});
