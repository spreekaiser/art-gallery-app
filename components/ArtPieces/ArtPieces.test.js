import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ArtPieces } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

function MockArtPieces() {
  return (
    <Provider store={store}>
      <ArtPieces pieces={demoPieces} />
    </Provider>
  );
}

describe("Art Pieces Unit-Tests", () => {
  //
  it("should be displayed all art pieces as a list", () => {
    render(<MockArtPieces />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});

//
describe("Art Pieces Integration-Tests", () => {
  //
  it("should be displayed each art piece's image", () => {
    render(<MockArtPieces />);
    const image = screen.getByRole("img", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(image).toBeInTheDocument();
  });

  //
  it("should be displayed each art piece's title", () => {
    render(<MockArtPieces />);
    const header = screen.getByRole("heading", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(header).toBeInTheDocument();
  });

  //
  it("should be displayed each art piece's artist", () => {
    render(<MockArtPieces />);
    const header = screen.getByRole("heading", {
      name: /Steve Johnson/i,
    });
    expect(header).toBeInTheDocument();
  });
});
