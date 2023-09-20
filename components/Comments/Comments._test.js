import { Comments } from "..";
import { render, screen } from "@testing-library/react";

test("render a list", () => {
  render(<Comments />);
  const listItem = screen.getByRole("list", {
    title: Comments,
  });
  expect(list).toBeInTheDocument();
});
