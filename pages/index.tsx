import { LoadingSpinner, SpotLight } from "../components";
import { IArtPiecesProps as IProps } from "../types/types";

export default function SpotlightPage({ pieces, isLoading }: IProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <SpotLight pieces={pieces} />
    </>
  );
}
