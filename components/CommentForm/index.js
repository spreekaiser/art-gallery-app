import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";
import { useImmer } from "use-immer";

export default function CommentForm({ slug }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  function handleSubmit(e) {
    e.preventDefault();
    const comment = document.getElementById("commentInput").value;
    console.log("Hello comments: ", artPiecesComments);
    console.log("is Slug here: ", slug);
    if (!artPiecesComments[slug]) {
      updateArtPiecesComments({ [slug]: [comment] });
    } else {
      updateArtPiecesComments({
        [slug]: [...artPiecesComments[slug], comment],
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
