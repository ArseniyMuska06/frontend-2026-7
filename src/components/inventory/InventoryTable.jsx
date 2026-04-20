import '../../App.css'
import { useInventory } from '../../store/StoreContext'
import { useNavigate } from 'react-router-dom'
import { deleteItem } from '../../services/inventoryApi'
import ConfirmModal from './ConfirmModal'
import { useState } from 'react'

function InventoryTable() {
    const { inventory, setInventory, loading, error } = useInventory()

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

    let table
    let content

    if (loading) {
        content = <p>Завантаження предметів</p>
    } else if (error) {
        content = <p>{error}</p>
    } else if (inventory.length === 0) {
        content = <p>Нема предметів</p>
    } else {
        table = inventory.map((item, index) => {
            return (
                <> 
                    <tr>
                        <td>
                            <img src={item.photo} alt="Item Photo" />
                        </td>
                        <td className="td-name">
                            <p>{item.name}</p>
                        </td>
                        <td className="td-desc">
                            <p>{item.description}</p>
                        </td>
                        <td className="actions-td">
                            <div className="actions-menu">
                                <button className="view-button" onClick={() => navigate(`/admin/inventory/${item.id}`)}></button>
                                <button className="edit-button" onClick={() => navigate(`/admin/edit/${item.id}`)}></button>
                                <button className="delete-button" onClick={() => {
                                    setSelectedItemId(item.id)
                                    setShowModal(true)
                                }}></button>
                            </div>
                        </td>
                    </tr>
                </>
            )
        })

        content = (
            <>
                <ConfirmModal actionName={"Видалити"} actionFunc={() => Delete(selectedItemId)} showModal={showModal} setShowModal={setShowModal} />
                <div className="table-wrapper">
                    <table className='inventory-table'>
                        <thead>
                            <tr>
                                <th className="photo-th">
                                    <p>Фото</p>
                                </th>
                                <th>
                                    <p>Назва предмету</p>
                                </th>
                                <th>
                                    <p>Опис</p>
                                </th>
                                <th className="actions-td">
                                    <p>Дії</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    return content
}

export default InventoryTable