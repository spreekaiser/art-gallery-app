import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";

interface ICommentFormProps {
  title: string;
}

interface IArtPiecesComments {
  [key: string]: string[];
}

export function CommentForm({ title }: ICommentFormProps) {
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
        [title]: [...artPiecesComments[title], comment],
      });
    }

    input.value = "";
    input.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="commentInput">Add a free comment: </label>
        <input
          type="text"
          id="commentInput"
          name="commentInput"
          placeholder="Your comment"
        />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
