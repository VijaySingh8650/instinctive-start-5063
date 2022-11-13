export const ADD = (item) => {
    return {
        type: "ADD_WISHLIST",
        payload:item
    }
}


//Remove item
export const DEL = (id) => {
    return {
        type: "DEL_WISHLIST",
        payload:id
    }
}

// remove individual item

export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}