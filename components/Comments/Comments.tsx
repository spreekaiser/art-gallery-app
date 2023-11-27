import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import { ICommentsProps as IProps, IArtPiecesComments } from "./Comments.d";
import { StyledComment, StyledCommentList } from "./Comments style";

export function Comments({ title }: IProps) {
  const [artPieceComments, updateArtPieceComments]: [
    IArtPiecesComments,
    (updater: IArtPiecesComments) => void
  ] = useImmerLocalStorageState("art-pieces-comments", {
    defaultValue: {},
  });

  return (
    <StyledCommentList>
      {(artPieceComments[title] || []).map((comment, index) => (
        <StyledComment key={index}>{comment}</StyledComment>
      ))}
    </StyledCommentList>
  );
}
