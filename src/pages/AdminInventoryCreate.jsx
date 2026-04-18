import '../App.css'
import InventoryForm from '../components/inventory/InventoryForm'
import { createItem, getInventoryList } from '../services/inventoryApi'
import { useNavigate } from 'react-router-dom'
import { useInventory } from '../store/StoreContext'

function AdminInventoryCreate() {
    const navigate = useNavigate()

    const { setInventory } = useInventory()

    function addItem(item, desc, photo) {
        createItem(item, desc, photo).then(() => {
            getInventoryList().then((data) => {
                setInventory(data)
                navigate("/admin")
            })
        })
    }

    return (
        <>
            <h1>Створити предмет</h1>
            <InventoryForm item_id={null} isCreate={true} itemFunc={addItem} />
        </>
    )
}

export default AdminInventoryCreate