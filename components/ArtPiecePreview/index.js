import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log(image);

  return (
    <li>
      <h3>{title}</h3>
      <Image src={image} alt={title} width={360} height={240} />
      <h4>@{artist}</h4>
    </li>
  );
}
