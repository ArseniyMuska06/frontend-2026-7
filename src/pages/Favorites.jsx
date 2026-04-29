import '../components/gallery/style/Gallery.css'
import { favouriteItemInventory } from '../hooks/useFavorites'
import { useEffect, useState } from 'react'
import InventoryCard from '../components/gallery/InventoryCard'

function FavouritesGallery() {
    const [favInventory, setFavInventory] = useState([])

    useEffect(() => {
        const data = favouriteItemInventory()
        setFavInventory(data)
    }, [])

    let gallery

    if (favInventory.length === 0) {
        gallery = <p>Нема вподобаних предметів</p>
    } else {
        gallery = (
            <div className='gallery-table'>
                {favInventory.map((item, index) => {
                    return <InventoryCard id={item.id} image={item.photo} name={item.name} desc={item.desc} isFav={true} />
                })}
            </div>
        )
    }

    return (
        <>
            <h1>Улюблені предмети</h1>
            {gallery}
        </>
    )
}

export default FavouritesGallery