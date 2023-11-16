import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import { ICommentsProps as IProps, IArtPiecesComments } from "./Comments.d";

export function Comments({ title }: IProps) {
  const [artPieceComments, updateArtPieceComments]: [
    IArtPiecesComments,
    (updater: IArtPiecesComments) => void
  ] = useImmerLocalStorageState("art-pieces-comments", {
    defaultValue: {},
  });

  return (
    <ul>
      {(artPieceComments[title] || []).map((comment, index) => (
        <li className="commentList" key={index}>
          {comment}
        </li>
      ))}
    </ul>
  );
}
