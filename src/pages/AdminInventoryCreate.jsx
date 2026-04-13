import '../App.css'
import InventoryForm from '../components/inventory/InventoryForm'
import { createItem, getInventoryList } from '../services/inventoryApi'
import { useNavigate } from 'react-router-dom'

function AdminInventoryCreate() {
    const navigate = useNavigate()

    function addItem(item, desc, photo) {
        createItem(item, desc, photo).then(() => {
            navigate("/admin")
        })
    }

    return (
        <>
            <h1>Створити предмет</h1>
            <InventoryForm isCreate={true} itemFunc={addItem} />
        </>
    )
}

export default AdminInventoryCreate