const BACK_URL = "http://localhost:3000"

export function getInventoryList() {
  return fetch(`${BACK_URL}/inventory`)
    .then(res => res.json())
}

export function getItem(item_id) {
  return fetch(`${BACK_URL}/inventory/${item_id}`)
    .then(res => res.json())
}

export function deleteItem(item_id) {
  return fetch(`${BACK_URL}/inventory/${item_id}`, {
    method: "DELETE"
  }).then(res => {
    if (!res.ok) {
      throw new Error("Delete failed")
    }
  })
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

export function updateItemInfo(item_id, name, desc) {
  return fetch(`${BACK_URL}/inventory/${item_id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify({
      name: name,
      description: desc
    })
  }).then(res => {
    if (!res.ok) {
      throw new Error("Помилка при оновленні інформації")
    }
    return res
  })
}

export function updateItemPhoto(item_id, photo) {
  const formData = new FormData()
  formData.append("photo", photo)

  return fetch(`${BACK_URL}/inventory/${item_id}/photo`, {
    method: "PUT",
    body: formData
  }).then(res => {
    if (!res.ok) {
      throw new Error("Помилка при оновленні інформації")
    }
    return res
  })
}