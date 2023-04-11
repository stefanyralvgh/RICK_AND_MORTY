import { ADD_FAVS, DELETE_FAVS } from "./types"


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
        // ⬆️Así, cuando no se eliminan también de favoritos cuando se eliminan de Home(no olvidar que lo que va aquí tiene que ser lo mismo que va en el parámetro)
        // payload: char, 
        
    }
}