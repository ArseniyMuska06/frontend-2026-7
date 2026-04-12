import '../../App.css'
import { useInventory } from '../../store/StoreContext'

function InventoryTable() {
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
                        <button>Перег.</button>
                        <button>Ред.</button>
                        <button>Вид.</button>
                    </div>
                </>
            )
        })
    }

    return (
        <div className='inventory-table'>
            {table}
        </div>
    )
}

export default InventoryTable