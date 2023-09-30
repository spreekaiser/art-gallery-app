import { screen, render } from "@testing-library/react";
import { ArtPieceDetails, ArtPieces, SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";

describe("FavoriteButton Integration-Tests", () => {
  //
  it("should display the favorite-button in the spotlight view", () => {
    const mockHandleToggleFavorite = jest.fn();
    const mockArtPiecesInfo = [];
    render(
      <SpotLight
        pieces={demoPieces}
        artPiecesInfo={mockArtPiecesInfo}
        handleToggleFavorite={mockHandleToggleFavorite}
      />
    );
    const svgElement = screen.getByTestId("favorite-button");
    expect(svgElement).toBeInTheDocument();
  });

  it("should display the favorite-button in each entry in the list view", () => {
    const mockHandleToggleFavorite = jest.fn();
    const mockArtPiecesInfo = [];
    render(
      <ArtPieces
        pieces={demoPieces}
        artPiecesInfo={mockArtPiecesInfo}
        handleToggleFavorite={mockHandleToggleFavorite}
      />
    );
    const svgElements = screen.getAllByTestId("favorite-button");
    expect(svgElements.length).toBe(demoPieces.length);
  });

  it("should display the favorite-button in the details view", () => {
    const mockHandleToggleFavorite = jest.fn();
    const mockArtPiecesInfo = [];
    render(
      <ArtPieceDetails
        {...demoPieces[0]}
        artPiecesInfo={mockArtPiecesInfo}
        handleToggleFavorite={mockHandleToggleFavorite}
      />
    );
    const svgElement = screen.getByTestId("favorite-button");
    expect(svgElement).toBeInTheDocument();
  });
  it("should save a non-favorite piece as favorite on click", () => {});
  it("should remove a favorite piece from favorites on click", () => {});
});
