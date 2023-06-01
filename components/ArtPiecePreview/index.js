import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  // console.log(image);

  return (
    <li>
      <Link href={`art-pieces/${slug}`}>
        <h3>{title}</h3>
        <Image src={image} alt={title} width={360} height={240} />
        <h4>@{artist}</h4>
      </Link>
    </li>
  );
}
