import { SET_POCKEMONS  } from './types'
import {getPokemonDetails} from '../api'


export const setPockemons = (payload) => ({
    type:SET_POCKEMONS,
    payload,
})
//actions creators en Redux Thunk, se utiliza para poder usar el asincronismos, 
// por que los action creators de Redux los solo pueden realizar secuencias sincronas
export const getPockemonsWithDetails = (pockemons = []) =>  async (dispatch) => {
        const pockemonsDetailed = await Promise.all(pockemons.map((pockemon) => getPokemonDetails(pockemon)))         
        dispatch(setPockemons(pockemonsDetailed))
}
