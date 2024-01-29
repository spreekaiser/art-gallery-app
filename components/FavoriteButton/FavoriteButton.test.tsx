import { screen, render, fireEvent } from "@testing-library/react";
import { ArtPieceDetails, ArtPieces, FavoriteButton, SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

const { slug } = demoPieces[0];
let mockArtPiecesInfo: string[] = [];

describe("FavoriteButton Integration-Tests", () => {
  //
  it("should display the favorite-button in the spotlight view", () => {
    render(
      <Provider store={store}>
        <SpotLight pieces={demoPieces} />
      </Provider>
    );
    const svg = screen.getByTestId("favorite-button");
    expect(svg).toBeInTheDocument();
  });

  //
  it("should display the favorite-button in each entry in the list view", () => {
    render(
      <Provider store={store}>
        <ArtPieces pieces={demoPieces} />
      </Provider>
    );
    const svgs = screen.getAllByTestId("favorite-button");
    expect(svgs.length).toBe(demoPieces.length);
  });

  //
  it("should display the favorite-button in the details view", () => {
    render(
      <Provider store={store}>
        <ArtPieceDetails piece={demoPieces[0]} />
      </Provider>
    );
    const svg = screen.getByTestId("favorite-button");
    expect(svg).toBeInTheDocument();
  });

  //
  it("should save a non-favorite piece as favorite on click", () => {
    render(
      <Provider store={store}>
        <FavoriteButton slug={slug}></FavoriteButton>
      </Provider>
    );
    expect(mockArtPiecesInfo.includes(slug)).toBeFalsy();
    const svg = screen.getByTestId("favorite-button");
    fireEvent.click(svg);
    mockArtPiecesInfo.push(slug);
    expect(mockArtPiecesInfo.includes(slug)).toBeTruthy();
  });

  //
  it("should remove a favorite piece from favorites on click", () => {
    render(
      <Provider store={store}>
        <FavoriteButton slug={slug} />
      </Provider>
    );
    expect(mockArtPiecesInfo.includes(slug)).toBeTruthy();
    const svg = screen.getByTestId("favorite-button");
    fireEvent.click(svg);
    mockArtPiecesInfo = mockArtPiecesInfo.filter(
      (savedSlug) => savedSlug !== slug
    );
    expect(mockArtPiecesInfo.includes(slug)).toBeFalsy();
  });
});
