import { ChangeEvent, useState } from "react";
import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import {
  ICommentFormProps as IProps,
  IArtPiecesComments,
} from "./CommentForm.d";
import { Form, Fieldset, Textarea } from "./CommentForm style";
import { ArrowButton } from "../ArrowButton/ArrowButton";

export function CommentForm({ title }: IProps) {
  const [isText, setIsText] = useState(false);

  const [artPiecesComments, updateArtPiecesComments]: [
    IArtPiecesComments,
    (updater: IArtPiecesComments) => void
  ] = useImmerLocalStorageState("art-pieces-comments", {
    defaultValue: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const input = document.getElementById("commentInput") as HTMLInputElement;
    const comment = input.value;

    if (!artPiecesComments[title]) {
      updateArtPiecesComments({ ...artPiecesComments, [title]: [comment] });
    } else {
      updateArtPiecesComments({
        ...artPiecesComments,
        [title]: [comment, ...artPiecesComments[title]],
      });
    }

    setIsText(false);
    input.value = "";
    input.focus();
  }

  function handleInputChange(event: ChangeEvent): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (!textarea.value) setIsText(false);
    else setIsText(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Textarea
          id="commentInput"
          name="commentInput"
          placeholder="Add a comment... it's free!"
          onChange={handleInputChange}
        ></Textarea>
        <ArrowButton width={8} isDisabled={!isText} type="submit">
          Hit it!
        </ArrowButton>
      </Fieldset>
    </Form>
  );
}
