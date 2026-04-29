import './style/Gallery.css'
import QuickView from './InventoryQuickView'
import { useState } from 'react'
import { addToLocalStorage } from '../../hooks/useFavorites'

function InventoryCard({id, image, name, desc}) {
    const [modalState, useModalState] = useState(false)
    let modal

    if (modalState) {
        modal = <QuickView id={id} image={image} name={name} desc={desc} close={() => useModalState(false)} />
    } else {
        modal = null
    }

    return (
        <>
            {modal}
            <div className="gallery-card" onClick={() => useModalState(true)}>
                <img src={image} alt="Card Image" />
                <div>
                    <p>{name}</p>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        addToLocalStorage(id, image, name, desc)
                    }}>❤</button>
                </div>
            </div>
        </>
    )
}

export default InventoryCard