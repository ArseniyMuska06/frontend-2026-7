import '../pages/style/AdminInventory.css'
import InventoryTable from '../components/inventory/InventoryTable'
import { useNavigate } from 'react-router-dom'

function AdminInventory() {
    const navigate = useNavigate()

    return (
        <>
            <header className='inventory-header'>
                <h1>Менеджер інвентарів</h1>
                <button className="add-item-button" onClick={() => {navigate("/admin/create")}}>Додати</button>
            </header>
            <main>
                <InventoryTable />
            </main>
        </>
    )
}

export default AdminInventory