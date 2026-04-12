import { useState, useEffect, useContext, createContext } from 'react'
import { getInventoryList } from "../services/inventoryApi";

const inventoryContext = createContext()

export function InventoryProvider({ children }) {
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        getInventoryList().then((data) => setInventory(data))
    }, [])

    return (
        <inventoryContext.Provider value={ {inventory, setInventory} }>
            {children}
        </inventoryContext.Provider>
    )
}

export function useInventory() {
  return useContext(inventoryContext);
}