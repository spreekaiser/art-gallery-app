import styled from "styled-components";
import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import {
  ICommentFormProps as IProps,
  IArtPiecesComments,
} from "./CommentForm.d";

export function CommentForm({ title }: IProps) {
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

    input.value = "";
    input.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        <StyledTextarea
          id="commentInput"
          name="commentInput"
          placeholder="Add a free comment..."
        ></StyledTextarea>
        <button type="submit">Submit</button>
      </StyledFieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: inherit;
  padding: 0;
  border: none;
`;

const StyledTextarea = styled.textarea`
  width: inherit;
  padding: 1rem;
  border-radius: 5px;
`;

const StyledButton = styled.button``;
