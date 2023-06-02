import ArtPiecePreview from "../components/ArtPiecePreview";

export default function FavoritesPage({pieces, handleToggleFavorite, artPiecesInfo}) {
  return (
    <>
    <h2>My Favorite Art Pieces ❤️</h2>
    <ul>

    {pieces.map(piece => {
        return artPiecesInfo.includes(piece.slug) && 
        <ArtPiecePreview
          key={piece.imageSource}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        /> 
    })
    }

    </ul>
    </>
  )
}
