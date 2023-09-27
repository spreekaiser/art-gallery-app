import { render, screen } from "@testing-library/react";
import { Navigation } from "..";

test("A navigation link 'Spotlight' is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: /spotlight/i });
  expect(link).toBeInTheDocument();
});

test("A navigation link 'Art Pieces' is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: /art pieces/i });
  expect(link).toBeInTheDocument();
});

test("A navigation link 'Favorites' is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: /favorites/i });
  expect(link).toBeInTheDocument();
});
