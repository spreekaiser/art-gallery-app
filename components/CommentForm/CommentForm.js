import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

export default function CommentForm({ title }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  function handleSubmit(e) {
    e.preventDefault();
    const comment = document.getElementById("commentInput").value;
    console.log("this is comments: ", artPiecesComments);
    console.log("this is Slug: ", title);
    if (!artPiecesComments[title]) {
      updateArtPiecesComments({ ...artPiecesComments, [title]: [comment] });
    } else {
      updateArtPiecesComments({
        ...artPiecesComments,
        [title]: [...artPiecesComments[title], comment],
      });
    }

    // console.log(artPiecesComments);
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
