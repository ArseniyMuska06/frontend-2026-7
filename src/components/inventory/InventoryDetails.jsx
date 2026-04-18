import { useState, useEffect } from 'react'
import '../../App.css'
import { getItem } from '../../services/inventoryApi'

function InventoryDetails({item_id}) {
    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
        getItem(item_id).then((data) => setItem(data))
        .catch(err => setError("Помилка під час завантаження даних: " + err))
    }, [item_id])

    if (error) {
        return (
            <p>{error}</p>
        )
    } else if (!item) {
        return (
            <p>Завантаження...</p>
        )
    } else {
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