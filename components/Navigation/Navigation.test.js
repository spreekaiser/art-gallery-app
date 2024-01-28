import { fireEvent, render, screen } from "@testing-library/react";
import { Navigation } from "..";

test("A navigation link 'Spotlight' is displayed after the burger menu is clicked", () => {
  render(<Navigation />);

  expect(screen.queryByRole("link", { name: /spotlight/i })).toBeNull();
  fireEvent.click(screen.getByTestId("menu"));
  expect(screen.getByRole("link", { name: /spotlight/i })).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("menu"));
  expect(screen.queryByRole("link", { name: /spotlight/i })).toBeNull();
});

//
test("A navigation link 'Art Pieces' is displayed after the burger menu is clicked", () => {
  render(<Navigation />);

  expect(screen.queryByRole("link", { name: /art pieces/i })).toBeNull();
  fireEvent.click(screen.getByTestId("menu"));
  expect(screen.getByRole("link", { name: /art pieces/i })).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("menu"));
  expect(screen.queryByRole("link", { name: /art pieces/i })).toBeNull();
});

//
test("A navigation link 'Favorites' is displayed after the burger menu is clicked", () => {
  render(<Navigation />);

  expect(screen.queryByRole("link", { name: /favorites/i })).toBeNull();
  fireEvent.click(screen.getByTestId("menu"));
  expect(screen.getByRole("link", { name: /favorites/i })).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("menu"));
  expect(screen.queryByRole("link", { name: /favorites/i })).toBeNull();
});
