import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";

// type Comment = string;
// type CommentsState = Record<string, string[]>; // Annahme: Kommentare sind in einem Objekt gespeichert
interface IArtPiecesComments {
  [key: string]: string[];
}

interface ICommentsProps {
  title: string;
}

export function Comments({ title }: ICommentsProps) {
  const [artPieceComments, updateArtPieceComments]: [
    IArtPiecesComments,
    (updater: IArtPiecesComments) => void
  ] = useImmerLocalStorageState("art-pieces-comments", {
    defaultValue: {},
  });

  return (
    <ul>
      {/* {(artPieceComments[title] || []).map((comment: string, index: number) => ( */}
      {(artPieceComments[title] || []).map((comment, index) => (
        <li className="commentList" key={index}>
          {comment}
        </li>
      ))}
    </ul>
  );
}
