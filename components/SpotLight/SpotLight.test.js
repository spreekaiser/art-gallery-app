import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

describe("SpotLight Unit-Tests", () => {
  //
  it("should be displayed the art piece's image", () => {
    const handleToggleFavorite = jest.fn();
    const artPiecesInfo = [];
    render(
      <Provider store={store}>
        <SpotLight
          pieces={demoPieces}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Provider>
    );
    const imageElement = screen.getByRole("img", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(imageElement).toBeInTheDocument();
  });

  it("should be displayed the art piece's artist", () => {
    const handleToggleFavorite = jest.fn();
    const artPiecesInfo = [];
    render(
      <Provider store={store}>
        <SpotLight
          pieces={demoPieces}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Provider>
    );
    const headerElement = screen.getByRole("heading", {
      name: /Steve Johnson/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
});
