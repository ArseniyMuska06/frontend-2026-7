import '../App.css'
import InventoryTable from '../components/inventory/InventoryTable'
import { useNavigate } from 'react-router-dom'

function AdminInventory() {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => {navigate("/admin/create")}}>Додати</button>
            <InventoryTable />
        </>
    )
}

export default AdminInventory