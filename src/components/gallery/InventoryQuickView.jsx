import './style/Gallery.css'
import { addToLocalStorage, removeFromLocalStorage } from '../../hooks/useFavorites'

function QuickView({id, image, name, desc, close, isFav}) {
    function addToFav() {
        addToLocalStorage(id, image, name, desc)
        close()
    }

    function removeFromFav() {
        removeFromLocalStorage(id, image, name, desc)
        close()
        window.location.reload();
    }

    let actionButton

    if (isFav) {
        actionButton = <button onClick={() => removeFromFav()}>Прибрати</button>
    } else {
        actionButton = <button onClick={() => addToFav()}>В улюблене</button>
    }

    return (
        <div className='quick-view-mode'>
            <div className='card-modal'>
                <button className='quick-view-close' onClick={() => close()}>Х</button>
                <img src={image} alt="Item Photo" />
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    {actionButton}
                </div>
            </div>
        </div>
    )
}

export default QuickView