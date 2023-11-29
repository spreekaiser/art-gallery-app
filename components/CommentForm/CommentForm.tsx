import { ChangeEvent, useState } from "react";
import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import {
  ICommentFormProps as IProps,
  IArtPiecesComments,
} from "./CommentForm.d";
import {
  StyledForm,
  StyledFieldset,
  StyledTextarea,
  StyledButton,
} from "./CommentForm style";

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        <StyledTextarea
          id="commentInput"
          name="commentInput"
          placeholder="Add a comment... it's free!"
          onChange={handleInputChange}
        ></StyledTextarea>
        <StyledButton disabled={!isText} type="submit">
          Hit it!
        </StyledButton>
      </StyledFieldset>
    </StyledForm>
  );
}
