import './style/Gallery.css'
import { useNavigate } from 'react-router-dom'

function FavoritesBar({isFav}) {
    const navigate = useNavigate()

    let content

    if (isFav) {
        content = <button onClick={() => navigate('/')}>На головну</button>
    } else {
        content = <button onClick={() => navigate('/favorites')}>Вподобані</button>
    }

    return (
        <div className='fav-bar'>
            {content}
        </div>
    )
}

export default FavoritesBar