import './style/Gallery.css'
import QuickView from './InventoryQuickView'
import { useState } from 'react'
import { addToLocalStorage, removeFromLocalStorage } from '../../hooks/useFavorites'

function InventoryCard({id, image, name, desc, isFav}) {
    const [modalState, useModalState] = useState(false)
    let modal

    if (modalState) {
        modal = <QuickView id={id} image={image} name={name} desc={desc} close={() => useModalState(false)} isFav={isFav} />
    } else {
        modal = null
    }

    let actionButton
    if (isFav) {
        actionButton = (
            <button onClick={(e) => {
                e.stopPropagation();
                removeFromLocalStorage(id, image, name, desc)
                window.location.reload();
            }}>X</button>
        )
    } else {
        actionButton = (
        <button onClick={(e) => {
                e.stopPropagation();
                addToLocalStorage(id, image, name, desc)
            }}>❤</button>
        )
    }

    return (
        <>
            {modal}
            <div className="gallery-card" onClick={() => useModalState(true)}>
                <img src={image} alt="Card Image" />
                <div>
                    <p>{name}</p>
                    {actionButton}
                </div>
            </div>
        </>
    )
}

export default InventoryCard