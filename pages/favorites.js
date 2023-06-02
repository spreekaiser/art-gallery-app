import ArtPiecePreview from "../components/ArtPiecePreview";

// loop pieces
// if artPieceSlug is in artPiecesInfo
// render ArtPiecePreview


export default function FavoritesPage({pieces, handleToggleFavorite, artPiecesInfo}) {
  return (
    <>
    <ul>


{pieces.map(piece => {
  return artPiecesInfo.includes(piece.slug) ? <ArtPiecePreview
            key={piece.imageSource}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            handleToggleFavorite={handleToggleFavorite}
artPiecesInfo={artPiecesInfo}
          /> : null
})
}


    </ul>
    </>
  )
}
