import { screen, render, fireEvent } from "@testing-library/react";
import { ArtPieceDetails, ArtPieces, FavoriteButton, SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";

const mockHandleToggleFavorite = jest.fn();
let mockArtPiecesInfo: string[] = [];

describe("FavoriteButton Integration-Tests", () => {
  //
  it("should display the favorite-button in the spotlight view", () => {
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

  it("should save a non-favorite piece as favorite on click", () => {
    render(
      <FavoriteButton
        handleToggleFavorite={mockHandleToggleFavorite}
        artPiecesInfo={mockArtPiecesInfo}
        slug={demoPieces[0].slug}
      />
    );
    const svgElement = screen.getByTestId("favorite-button");
    fireEvent.click(svgElement);
    mockArtPiecesInfo.push(demoPieces[0].slug);
    expect(mockHandleToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockArtPiecesInfo.includes(demoPieces[0].slug)).toBeTruthy();
  });

  // it("should render filled heart icon styled component", async () => {
  //   render(
  //     <FavoriteButton
  //       handleToggleFavorite={mockHandleToggleFavorite}
  //       artPiecesInfo={mockArtPiecesInfo}
  //       slug={demoPieces[0].slug}
  //     />
  //   );
  //   const svgElement = screen.getByTestId("favorite-button");
  //   // await fireEvent.click(svgElement);
  //   await userEvent.click(svgElement);
  //   screen.debug();
  //   expect(svgElement).toHaveClass("favorite-active");
  // });
  //
  it("should remove a favorite piece from favorites on click", () => {
    render(
      <FavoriteButton
        handleToggleFavorite={mockHandleToggleFavorite}
        artPiecesInfo={mockArtPiecesInfo}
        slug={demoPieces[0].slug}
      />
    );
    const svgElement = screen.getByTestId("favorite-button");
    fireEvent.click(svgElement);

    mockArtPiecesInfo = mockArtPiecesInfo.filter(
      (slug) => slug !== demoPieces[0].slug
    );
    expect(mockHandleToggleFavorite).toHaveBeenCalledTimes(2);
    expect(mockArtPiecesInfo.includes(demoPieces[0].slug)).toBeFalsy();
  });
});
