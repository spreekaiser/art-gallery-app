import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { SpotLight } from "..";
import { demoPieces } from "../../_testData/testData";
import { Provider } from "react-redux";
import store from "../../store";

function MockSpotLight() {
  return (
    <Provider store={store}>
      <SpotLight pieces={demoPieces} />
    </Provider>
  );
}

describe("SpotLight Unit-Tests", () => {
  //
  it("should be displayed the art piece's image", () => {
    render(<MockSpotLight />);
    const image = screen.getByRole("img", {
      name: /Orange Red and Green Abstract Painting/i,
    });
    expect(image).toBeInTheDocument();
  });

  //
  it("should be displayed the art piece's artist", () => {
    render(<MockSpotLight />);
    const header = screen.getByRole("heading", {
      name: /Steve Johnson/i,
    });
    expect(header).toBeInTheDocument();
  });
});
