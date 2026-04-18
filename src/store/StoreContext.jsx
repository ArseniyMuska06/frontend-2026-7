import { useState, useEffect, useContext, createContext } from 'react'
import { getInventoryList } from "../services/inventoryApi";

const inventoryContext = createContext()

export function InventoryProvider({ children }) {
    const [inventory, setInventory] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getInventoryList().then((data) => setInventory(data))
        .catch(err => setError("Помилка завантаження даних: " + err.message))
        .finally(() => setLoading(false))
    }, [])

    return (
        <inventoryContext.Provider value={ {inventory, setInventory, loading, error} }>
            {children}
        </inventoryContext.Provider>
    )
}

export function useInventory() {
  return useContext(inventoryContext);
}