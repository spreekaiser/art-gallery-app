import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

export function Comments({ title }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  return (
    <ul>
      {(artPiecesComments[title] || []).map((comment, index) => (
        <li className="commentList" key={index}>
          {comment}
        </li>
      ))}
    </ul>
  );
}
