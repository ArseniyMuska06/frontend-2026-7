import './style/Gallery.css'
import { addToLocalStorage } from '../../hooks/useFavorites'

function QuickView({id, image, name, desc, close}) {
    function addToFav() {
        addToLocalStorage(id, image, name, desc)
        close()
    }

    return (
        <div className='quick-view-mode'>
            <div className='card-modal'>
                <button className='quick-view-close' onClick={() => close()}>Х</button>
                <img src={image} alt="Item Photo" />
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <button onClick={() => addToFav()}>В улюблене</button>
                </div>
            </div>
        </div>
    )
}

export default QuickView