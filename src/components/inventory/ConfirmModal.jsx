import '../../App.css'

function ConfirmModal({actionName, actionFunc, showModal, setShowModal}) {
    let content
    if (showModal == true) {
        content = (
            <div className='confirm-screen'>
                <div className='confirm-modal'>
                    <p>Ви впевнені що хочете {actionName.toLowerCase()} елемент? <br />
                    Цю дію неможливо буде скасувати</p>
                    <div>
                        <button class="action-button" onClick={() => {
                            try {
                                actionFunc()
                                setShowModal(false)
                            } catch(err) {
                                alert("Помилка: " + err)
                            }
                        }}>Так</button>
                        <button onClick={() => setShowModal(false)}>Скасувати</button>
                    </div>
                </div>
            </div>
        )
    } else {
        content = null
    }

    return content
}

export default ConfirmModal