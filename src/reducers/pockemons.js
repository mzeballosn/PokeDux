import { SET_FAVORITE, SET_LOADING, SET_POCKEMONS } from "../actions/types";

const initialState = {
    pockemons: [],
    loading: false,
    favorites:false,
}
export const pockemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POCKEMONS:
            return {
                ...state,
                pockemons: action.payload
            }        
        case SET_FAVORITE:
            // eslint-disable-next-line no-case-declarations
            const newPockemonList = [...state.pockemons]
            // eslint-disable-next-line no-case-declarations
            const currentPockemonIndex = newPockemonList.findIndex(pockemon => {return pockemon.id === action.payload.pockemonId})
            
            if(currentPockemonIndex < 0){
                return state
            } 
            newPockemonList[currentPockemonIndex]?.favorite ?  
                        newPockemonList[currentPockemonIndex].favorite = false : 
                        newPockemonList[currentPockemonIndex].favorite = true
            
            return {
                ...state,
                pockemons: newPockemonList
            }
        case SET_LOADING:
            return {
                ...state,
                loading:action.payload
            }
        
        default:
            return state
    }
}

