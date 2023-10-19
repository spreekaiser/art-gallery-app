import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";

export function CommentForm({ title }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById("commentInput");
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
