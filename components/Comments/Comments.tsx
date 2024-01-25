import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import { ICommentsProps as IProps, IArtPiecesComments } from "./Comments.d";
import { Comment, CommentList } from "./Comments.style";

export function Comments({ title }: IProps) {
  const [artPieceComments, updateArtPieceComments]: [
    IArtPiecesComments,
    (updater: IArtPiecesComments) => void
  ] = useImmerLocalStorageState("art-pieces-comments", {
    defaultValue: {},
  });

  return (
    <CommentList>
      {(artPieceComments[title] || []).map((comment, index) => (
        <Comment key={index}>{comment}</Comment>
      ))}
    </CommentList>
  );
}
