import { fireEvent, render, screen } from "@testing-library/react";
import { ArtPieceDetails, CommentForm } from "..";
import { Provider } from "react-redux";
import store from "../../store";
import { demoPieces } from "../../_testData/testData";

function MockArtPieceDetails() {
  return (
    <Provider store={store}>
      <ArtPieceDetails piece={demoPieces[0]} />
    </Provider>
  );
}

describe("Art Pieces Details CommentForm Tests", () => {
  //
  it("should disable submit button if textfield is empty", () => {
    render(<CommentForm />);
    const textarea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { type: "submit" });
    expect(textarea.value).toBe("");
    expect(button).toBeDisabled();
  });

  //
  it("should enable submit button if textfield is not empty", () => {
    render(<CommentForm />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "I'm the greatest!" } });
    const button = screen.getByRole("button", { type: "submit" });
    expect(button).not.toBeDisabled();
  });

  //
  it("should be not an empty textarea if the the user typed something", () => {
    render(<CommentForm />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "I'm the greatest!" } });
    expect(textarea.value).not.toBe("");
  });

  //
  it("should clear the textarea if the submit button is clicked", () => {
    render(<CommentForm />);
    const textarea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { type: "submit" });
    fireEvent.change(textarea, { target: { value: "I'm the greatest!" } });
    fireEvent.click(button);
    expect(textarea.value).toBe("");
  });

  //
  it("should render the comment if the submit button is clicked", () => {
    render(<MockArtPieceDetails />);
    const textarea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { type: "submit" });
    fireEvent.change(textarea, { target: { value: "I'm the greatest!" } });
    fireEvent.click(button);
    const comment = screen.getByText("I'm the greatest!");
    expect(comment).toBeInTheDocument();
  });
});
