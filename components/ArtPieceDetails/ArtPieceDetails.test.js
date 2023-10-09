import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from "..";
import { demoPieces } from "../../_testData/testData";

describe("Art Pieces Details Color-Palette Tests", () => {
  //
  it("should receive the colors props and render the colors with the hex codes as titles", () => {
    render(<ArtPieceDetails {...demoPieces[0]} />);
    const liElement = screen.getByTitle("#0f5855");
    expect(liElement).toBeInTheDocument();
  });

  it("should render 5 list items, 1 for each color", () => {
    render(<ArtPieceDetails {...demoPieces[0]} />);
    const liElements = screen.getAllByTestId("color-palette-listitem");
    expect(liElements.length).toBe(5);
  });
});
