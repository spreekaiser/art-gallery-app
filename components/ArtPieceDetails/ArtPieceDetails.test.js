import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

function MockArtPieceDetails() {
  return (
    <Provider store={store}>
      <ArtPieceDetails piece={demoPieces[0]} />
    </Provider>
  );
}

describe("Art Pieces Details Color-Palette Tests", () => {
  //
  it("should receive the colors props and render the colors with the hex codes as titles", () => {
    render(<MockArtPieceDetails />);
    const listItem = screen.getByTitle("#0f5855");
    expect(listItem).toBeInTheDocument();
  });

  it("should render 5 list items, 1 for each color", () => {
    render(<MockArtPieceDetails />);
    const listItem = screen.getAllByTestId("color-palette-listitem");
    expect(listItem.length).toBe(5);
  });
});
