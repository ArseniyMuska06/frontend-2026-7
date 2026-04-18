import { useState, useEffect } from 'react'
import '../../App.css'
import { useRef } from 'react'
import ConfirmModal from './ConfirmModal'
import { getItem } from '../../services/inventoryApi'
import { useNavigate } from 'react-router-dom'

function InventoryForm({item_id, isCreate, itemFunc}) {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [photo, setPhoto] = useState(null)

    const fileInputRef = useRef(null)

    let submitContent = isCreate ? 'Створити' : 'Змінити'

    function resetForm() {
        setName("")
        setDesc("")
        setPhoto(null)

        fileInputRef.current.value = ""
    }

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (isCreate == false) {
            getItem(item_id).then((data) => {
                setName(data.name)
                setDesc(data.description)
            })
        }
    }, [])

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                setShowModal(true)
            }}>
                <ConfirmModal actionName={submitContent} actionFunc={() => itemFunc(name, desc, photo)} showModal={showModal} setShowModal={setShowModal} />
                <p>
                    <label htmlFor="item-name">Назва предмету:</label>
                    <input required value={name} onChange={(e) => {setName(e.target.value)}} type="text" name="item-name" id="item-name" />
                </p>
                <p>
                    <label htmlFor="item-file">Фото предмету:</label>
                    <input ref={fileInputRef} onChange={(e) => {setPhoto(e.target.files[0])}} type="file" name="item-file" id="item-file" />
                </p>
                <p>
                    <label htmlFor="item-desc">Опис:</label>
                    <textarea value={desc} onChange={(e) => {setDesc(e.target.value)}} name="item-desc" id="item-desc"></textarea>
                </p>
                <p>
                    <button onClick={() => navigate('/admin')} type='button'>Скасувати</button>
                    <button onClick={() => resetForm()} type='button'>Очистити</button>
                    <button type='submit'>{submitContent}</button>
                </p>
            </form>
        </>
    )
}

export default InventoryForm