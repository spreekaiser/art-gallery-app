import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";

describe("SpotLight Unit-Tests", () => {
  //
  it("should be displayed the art piece's image", () => {
    const handleToggleFavorite = jest.fn();
    const artPiecesInfo = [];
    render(
      <SpotLight
        pieces={demoPieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    );
    const imageElement = screen.getByRole("img", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(imageElement).toBeInTheDocument();
  });
});
