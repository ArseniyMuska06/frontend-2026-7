import { useState, useEffect } from 'react'
import '../../App.css'
import { getItem } from '../../services/inventoryApi'

function InventoryDetails({item_id}) {
    const [item, setItem] = useState(null)

    useEffect(() => {
        getItem(item_id).then((data) => setItem(data))
    }, [item_id])

    if (!item) {
        return (
            <p>Завантаження...</p>
        )
    }  else {
        return (
            <div>
                <img src={item.photo} alt="Item Image" />
                <p>{item.name}</p>
                <p>{item.description}</p>
            </div>
        )
    }
}

export default InventoryDetails