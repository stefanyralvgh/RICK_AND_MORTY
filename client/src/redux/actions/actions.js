import { ADD_FAVS, DELETE_FAVS, FILTER, ORDER, RESET } from "./types"


export const addFavs = (char) => {
    return {
        type: ADD_FAVS,
        payload: char,
    }
}

export const deleteFavs = (id) => {
    return {
        type: DELETE_FAVS,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }

}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }

}

export const resetFilters = () => ({
    type: RESET,
  });