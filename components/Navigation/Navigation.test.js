// import { ArtPieces } from "..";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Navigation } from "..";

test("A navigation link 'Spotlight' is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: /spotlight/i });
  expect(link).toBeInTheDocument();
});
