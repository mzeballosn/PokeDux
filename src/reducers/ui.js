import { fromJS, setIn,  getIn, List } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POCKEMONS } from "../actions/types";

//sin usar la libreria inmmutable
/* 
const initialState = {
    pockemons: [],
    loading: false,
    favorites:false,
}
*/
// Para usar la libreria immutable se usa el metodo FromJs para convertir los objetos o arreglos
// en una estructura de la libreria immutable
const initialState = fromJS({
    loadings:false
})


export const iuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return state.setIn(['loading'],action.payload)           
        default:
            return state
    }
}

