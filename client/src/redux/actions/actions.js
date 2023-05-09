import { ADD_FAVS, DELETE_FAVS, FILTER, ORDER, RESET } from "./types";
import axios from 'axios';

// export const addFavs = (char) => {
    // return {
    //     type: ADD_FAVS,
    //     payload: char,
    // }
// }

export const addFavs = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAVS,
                payload: data,
            });
        });
    };
};
    
export const deleteFavs = (id) => {
    // return {
    //     type: DELETE_FAVS,
    //     payload: id,
    // }
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: DELETE_FAVS,
                payload: data,
        });
        });
    };
};


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