import '../App.css'
import InventoryDetails from '../components/inventory/InventoryDetails'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

function AdminInventoryDetails({item_id}) {
    const { id } = useParams()

    const navigate = useNavigate()

    return (
        <>
            <h1>Детальний опис предмету</h1>
            <button onClick={() => navigate('/admin')}>Назад</button>
            <InventoryDetails item_id={id} />
        </>
    )
}

export default AdminInventoryDetails