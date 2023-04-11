import { ADD_FAVS, DELETE_FAVS } from "../actions/types";

const initialState = {
    myFavorites: []
};



function rootReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FAVS:
            return {
               ...state,
               myFavorites: [...state.myFavorites, action.payload] 
            }
        case DELETE_FAVS: 
            return {
                ...state,
                myFavorites: state.myFavorites.filter (
                    (char) => char.id !== action.payload
                ),
            };
         
        default: return {...state};
    };
};

export default rootReducer;