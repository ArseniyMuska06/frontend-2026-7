import '../App.css'
import InventoryForm from '../components/inventory/InventoryForm'
import { createItem, getInventoryList } from '../services/inventoryApi'
import { Link, useNavigate } from 'react-router-dom'
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
            <div className='form-body'>
                <header>
                    <Link className="back-to-panel" to="/admin">Назад</Link>
                </header>
                <main>
                    <InventoryForm item_id={null} isCreate={true} itemFunc={addItem} />
                </main>
            </div>
        </>
    )
}

export default AdminInventoryCreate