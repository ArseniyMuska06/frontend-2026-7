import { useState } from 'react'
import '../../App.css'

function InventoryForm({isCreate, itemFunc}) {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [photo, setPhoto] = useState(null)

    let submitContent = isCreate ? 'Створити' : 'Змінити'

    function resetForm() {
        setName("")
        setDesc("")
        setPhoto(null)
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                itemFunc(name, desc, photo)
            }}>
                <p>
                    <label htmlFor="item-name">Назва предмету:</label>
                    <input value={name} onChange={(e) => {setName(e.target.value)}} required type="text" name="item-name" id="item-name" />
                </p>
                <p>
                    <label htmlFor="item-file">Фото предмету:</label>
                    <input onChange={(e) => {setPhoto(e.target.files[0])}} type="file" name="item-file" id="item-file" />
                </p>
                <p>
                    <label htmlFor="item-desc">Опис:</label>
                    <textarea value={desc} onChange={(e) => {setDesc(e.target.value)}} name="item-desc" id="item-desc"></textarea>
                </p>
                <p>
                    <button onClick={() => resetForm()} type='button'>Очистити</button>
                    <button type='submit'>{submitContent}</button>
                </p>
            </form>
        </>
    )
}

export default InventoryForm