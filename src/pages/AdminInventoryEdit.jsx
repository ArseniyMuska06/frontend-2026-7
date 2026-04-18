import '../App.css'
import InventoryForm from '../components/inventory/InventoryForm'
import { updateItemInfo, updateItemPhoto, getInventoryList } from '../services/inventoryApi'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useInventory } from '../store/StoreContext'

function AdminInventoryEdit() {
    const { id } = useParams()

    const navigate = useNavigate()

    const { setInventory } = useInventory()

    function editItem(name, desc, photo) {
        updateItemInfo(id, name, desc).then(() => {
            if (photo) {
                updateItemPhoto(id, photo).then(() => {
                    getInventoryList().then((data) => {
                        setInventory(data)
                        navigate('/admin')
                    })
                })
            } else {
                getInventoryList().then((data) => {
                    setInventory(data)
                    navigate('/admin')
                })
            }
        })
    }

    return (
        <>
            <h1>Редагувати предмет</h1>
            <InventoryForm item_id={id} isCreate={false} itemFunc={editItem} />
        </>
    )
}

export default AdminInventoryEdit