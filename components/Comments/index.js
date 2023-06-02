import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

export default function Comments({ title }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  //   const comment = (artPiecesComments[slug] || []).map((comment) => {
  //     console.log("comment in maping: ", comment);
  //     return comment;
  //   });
  return (
    <ul>
      {(artPiecesComments[title] || []).map((comment, index) => {
        // console.log("comment in maping: ", comment);
        return <li key={index}>{comment}</li>;
      })}
    </ul>
  );
}
