import './style/Gallery.css'
import InventoryCard from './InventoryCard'
import { useInventory } from '../../store/StoreContext'

function InventoryGallery() {
    const {inventory, loading, error} = useInventory()

    let gallery

    if (loading) {
        gallery = <p>Завантаження...</p>
    } else if (error) {
        gallery = <p>{error}</p>
    } else {
        gallery = (
            <div className='gallery-table'>
                {inventory.map((item, index) => {
                    return <InventoryCard id={item.id} image={item.photo} name={item.name} desc={item.description} isFav={false} />
                })}
            </div>
        )
    }

    return gallery
}

export default InventoryGallery