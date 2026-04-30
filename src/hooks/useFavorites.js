export function addToLocalStorage(id, photo, name, desc) {
    function Action(n) {
        localStorage.setItem(`Fav_item${n}_id`, id)
        localStorage.setItem(`Fav_item${n}_photo`, photo)
        localStorage.setItem(`Fav_item${n}_name`, name)
        localStorage.setItem(`Fav_item${n}_desc`, desc)
    }
    
    let n = 1

    while (localStorage.getItem(`Fav_item${n}_id`)) {
            if (localStorage.getItem(`Fav_item${n}_id`) == id) {
                return
            } else {
                n++
            }
        }

    Action(n)
}

export function removeFromLocalStorage(id, photo, name, desc) {
    function Action(n) {
        localStorage.removeItem(`Fav_item${n}_id`)
        localStorage.removeItem(`Fav_item${n}_photo`)
        localStorage.removeItem(`Fav_item${n}_name`)
        localStorage.removeItem(`Fav_item${n}_desc`)
    }
    
    let n = 1

    while (localStorage.getItem(`Fav_item${n}_id`)) {
            if (localStorage.getItem(`Fav_item${n}_id`) == id) {
                Action(n)
                return
            } else {
                n++
            }
        }
}

export function favouriteItemInventory() {
    let inventory = []

    let n = 1
    while (localStorage.getItem(`Fav_item${n}_photo`)) {
        inventory.push({
            id: localStorage.getItem(`Fav_item${n}_id`),
            photo: localStorage.getItem(`Fav_item${n}_photo`),
            name: localStorage.getItem(`Fav_item${n}_name`),
            desc: localStorage.getItem(`Fav_item${n}_desc`)
        })
        n++
    }

    return inventory
}