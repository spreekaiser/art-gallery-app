import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

describe("Art Pieces Details Color-Palette Tests", () => {
  //
  it("should receive the colors props and render the colors with the hex codes as titles", () => {
    render(
      <Provider store={store}>
        <ArtPieceDetails piece={demoPieces[0]} />
      </Provider>
    );
    const liElement = screen.getByTitle("#0f5855");
    expect(liElement).toBeInTheDocument();
  });

  it("should render 5 list items, 1 for each color", () => {
    render(
      <Provider store={store}>
        <ArtPieceDetails piece={demoPieces[0]} />
      </Provider>
    );
    const liElements = screen.getAllByTestId("color-palette-listitem");
    expect(liElements.length).toBe(5);
  });
});
