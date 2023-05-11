import { ADD_FAVS, DELETE_FAVS, FILTER, ORDER, RESET } from "./types";
import axios from 'axios';


// export const addFavs = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAVS,
//                 payload: data,
//             });
//         });
//     };
// };
    
// export const deleteFavs = (id) => {
  
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: DELETE_FAVS,
//                 payload: data,
//         });
//         });
//     };
// };


export const addFavs = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint, character);
        dispatch({
          type: ADD_FAVS,
          payload: data,
        });
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
  };
  
  export const deleteFavs = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
        const { data } = await axios.delete(endpoint);
        dispatch({
          type: DELETE_FAVS,
          payload: data,
        });
      } catch (error) {
        // Handle error
        console.error(error);
      }
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