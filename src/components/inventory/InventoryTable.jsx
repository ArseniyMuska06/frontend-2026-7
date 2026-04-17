import '../../App.css'
import { useInventory } from '../../store/StoreContext'
import { useNavigate } from 'react-router-dom'

function InventoryTable() {
    const navigate = useNavigate()
    const { inventory } = useInventory()

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
                        <button>Ред.</button>
                        <button>Вид.</button>
                    </div>
                </>
            )
        })
    }

    return (
        <div className='inventory-table'>
            <p>Фото</p>
            <p>Назва предмету</p>
            <p>Опис</p>
            <p>Дії</p>
            {table}
        </div>
    )
}

export default InventoryTable