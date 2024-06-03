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
    pockemons: [],
    loading: false,
    favorites:false,
})


export const pockemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POCKEMONS:
            // se anula al usar la libreria immutable 
            //return { ...state, pockemons: action.payload }        
            // como no es un objeto plano de javascript paso ser una estructura de immutable
            return state.setIn(['pockemons'], fromJS(action.payload))
        case SET_FAVORITE:
            /*
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
            }*/
            // iniciamos uso con immutable
            // eslint-disable-next-line no-case-declarations                        
            
            /*
            const currentPockemonIndex = state.get('pockemons').toJS().findIndex((pokemon)=>{ return pokemon.id === action.payload.pockemonId})
            
            if(currentPockemonIndex < 0 ){
                return state
            }
            // eslint-disable-next-line no-case-declarations                        
            const isFavorite = state.getIn(['pockemons',currentPockemonIndex,'favorites'])
            
            return state.setIn(['pockemons',currentPockemonIndex, 'favorites', isFavorite === undefined ? true : false ])
            */

            //const currentPokemonIndex = state.get('pockemons').findIndex(pockemon => pockemon.get('id') === action.payload.pockemonId )
            
            // eslint-disable-next-line no-case-declarations                        
            const pokemons = state.get('pockemons', List())
            // eslint-disable-next-line no-case-declarations                        
            const currentPokemonIndex = pokemons.findIndex(pokemon => pokemon.get('id') === action.payload.pockemonId)
            
            if (currentPokemonIndex < 0) {
                return state
            }
            // eslint-disable-next-line no-case-declarations                        
            const isFavorite = getIn(state, ['pockemons', currentPokemonIndex, 'favorite']);
            
            return state.setIn(['pockemons', currentPokemonIndex, 'favorite'], !isFavorite);
            
            /*
        case SET_LOADING:
            return {
                ...state,
                loading:action.payload
            }
        */
        default:
            return state
    }
}

