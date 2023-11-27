import styled from "styled-components";
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
    <StyledCommentList>
      {(artPieceComments[title] || []).map((comment, index) => (
        <StyledComment key={index}>{comment}</StyledComment>
      ))}
    </StyledCommentList>
  );
}

const StyledCommentList = styled.ul`
  width: 90%;
`;

const StyledComment = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  text-align: left;
  background-color: var(--main-color2);
  border: 0.5px solid gray;
  border-radius: 1rem;
  border-bottom-right-radius: 0;
`;
