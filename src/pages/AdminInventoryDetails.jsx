import '../App.css'
import './style/AdminInventoryDetails.css'
import InventoryDetails from '../components/inventory/InventoryDetails'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

function AdminInventoryDetails({item_id}) {
    const { id } = useParams()

    const navigate = useNavigate()

    return (
        <>
            <div class="detail-body">
                <header>
                    <Link className="back-to-panel" to="/admin">Назад</Link>
                </header>
                <main>
                    <InventoryDetails item_id={id} />
                </main>
            </div>
        </>
    )
}

export default AdminInventoryDetails