import { SET_POCKEMONS } from "../actions/types";

const initialState = {
    pockemons: [],
}
export const pockemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POCKEMONS:
            return {
                ...state,
                pockemons: action.payload
            }        
        default:
            return state
    }
}

