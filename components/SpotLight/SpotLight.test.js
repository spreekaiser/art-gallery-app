import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

describe("SpotLight Unit-Tests", () => {
  //
  it("should be displayed the art piece's image", () => {
    render(
      <Provider store={store}>
        <SpotLight pieces={demoPieces} />
      </Provider>
    );
    const imageElement = screen.getByRole("img", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(imageElement).toBeInTheDocument();
  });

  it("should be displayed the art piece's artist", () => {
    render(
      <Provider store={store}>
        <SpotLight pieces={demoPieces} />
      </Provider>
    );
    const headerElement = screen.getByRole("heading", {
      name: /Steve Johnson/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
});
