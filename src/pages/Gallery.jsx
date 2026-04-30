import '../App.css'
import InventoryGallery from '../components/gallery/InventoryGallery'
import FavoritesBar from '../components/gallery/FavoritesBar'

function Gallery() {
    return (
        <>
            <h1>Галерея</h1>
            <FavoritesBar isFav={false} />
            <InventoryGallery />
        </>
    ) 
}

export default Gallery