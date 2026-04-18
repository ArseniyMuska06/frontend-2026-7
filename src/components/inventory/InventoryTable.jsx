import '../../App.css'
import { useInventory } from '../../store/StoreContext'
import { useNavigate } from 'react-router-dom'
import { deleteItem } from '../../services/inventoryApi'
import ConfirmModal from './ConfirmModal'
import { useState } from 'react'

function InventoryTable() {
    const { inventory, setInventory } = useInventory()

    function Delete(item_id) {
        deleteItem(item_id).then(() => {
            setInventory(prev => prev.filter(function(item) {
                return item.id !== item_id
            }))
        })
    }

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState(null)

    let table;

    if (inventory.length === 0) {
        table = <p>Нема предметів</p>
    } else {
        table = inventory.map((item, index) => {
            return (
                <> 
                    <img src={item.photo} alt="Item Photo" />
                    <p key={index}>{item.name}</p>
                    <p key={index}>{item.description}</p>
                    <div>
                        <button onClick={() => navigate(`/admin/inventory/${item.id}`)}>Перег.</button>
                        <button onClick={() => navigate(`/admin/edit/${item.id}`)}>Ред.</button>
                        <button onClick={() => {
                            setSelectedItemId(item.id)
                            setShowModal(true)
                        }}>Вид.</button>
                    </div>
                </>
            )
        })
    }

    return (
        <>
            <ConfirmModal actionName={"Видалити"} actionFunc={() => Delete(selectedItemId)} showModal={showModal} setShowModal={setShowModal} />
            <div className='inventory-table'>
                <p>Фото</p>
                <p>Назва предмету</p>
                <p>Опис</p>
                <p>Дії</p>
                {table}
            </div>
        </>
    )
}

export default InventoryTable