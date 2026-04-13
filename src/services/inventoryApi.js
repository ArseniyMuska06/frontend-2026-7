const BACK_URL = "http://localhost:3000"

export function getInventoryList() {
    return fetch(`${BACK_URL}/inventory`)
      .then(res => res.json())
}

export function getItem(item_id) {
    return fetch(`${BACK_URL}/inventory/${item_id}`)
      .then(res => res.json())
}

export function createItem(name, desc, photo) {
    const formData = new FormData()
    formData.append("inventory_name", name)
    formData.append("description", desc)
    formData.append("photo", photo)

    return fetch(`${BACK_URL}/register`, {
      method: "POST",
      body: formData
    }).then(res => res.json())
}