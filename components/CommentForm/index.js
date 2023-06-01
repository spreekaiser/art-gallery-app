import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

export default function CommentForm() {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      comments: {},
    });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hello commit", artPiecesInfo);
    updateArtPiecesComments();
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="commentInput">Add a comment:</label>
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
