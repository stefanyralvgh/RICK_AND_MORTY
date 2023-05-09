import { ADD_FAVS, DELETE_FAVS, FILTER,ORDER, RESET } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

 const rootReducer = (state = initialState, action) =>{
    switch(action.type) {
        // case ADD_FAVS:

        //   let copy1 = state.allCharacters;
        //   copy1.push(action.payload);
        // return {
            
        //      ...state, 
        //      myFavorites: copy1, allCharacters: copy1 
        //     };

        case ADD_FAVS:
            return { 
              ...state, myFavorites: action.payload, 
              allCharacters: action.payload };

        case DELETE_FAVS: 
            // return {
            //     ...state,
            //     allCharacters: state.allCharacters.filter((char) => char.id !== action.payload),
            //     myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
            // };
            return { ...state, myFavorites: action.payload };
                    

        case FILTER:
          let copy3 = [...state.allCharacters];
          if(action.payload === ''){
              return { ...state, myFavorites: copy3 };
          } else {
              let filtro = [...state.allCharacters].filter((char) => {
                  return char.gender === action.payload
              })
              return { ...state, myFavorites: filtro };
          };

        case ORDER:
            let orderFavorites;
            
            if (action.payload === "Lowest to highest") {
              orderFavorites = state.myFavorites.sort((a, b) =>
                a.id > b.id ? 1 : -1
              );
            } else {
              orderFavorites = state.myFavorites.sort((a, b) =>
                a.id < b.id ? 1 : -1
              );
            
            }
                return {
                  ...state,
                  myFavorites: [...orderFavorites],
                };
        case RESET:
          return {
            ...state,
            myFavorites: state.allCharacters,
          }
              
                
        default: return {...state};
    }
}

export default rootReducer;