import { SET_POCKEMONS, GET_POCKEMONS } from "./types";

export const setPockemons = (payload) => ({
    type:SET_POCKEMONS,
    payload,
})
export const getPockemons = (payload) => ({
    type:GET_POCKEMONS,
    payload,
})




