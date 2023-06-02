import { useImmerLocalStorageState } from "../../lib/hook/useImmerLocalStorageState";

export default function Comments({ slug }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  //   const comment = (artPiecesComments[slug] || []).map((comment) => {
  //     console.log("comment in maping: ", comment);
  //     return comment;
  //   });
  let id = 0;
  return (
    <ul>
      {(artPiecesComments[slug] || []).map((comment) => {
        // console.log("comment in maping: ", comment);
        return <li key={id++}>{comment}</li>;
      })}
    </ul>
  );
}
