import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';


const initialState = {
    pockemons: [],    
}

// trabajando del asincronismo con createAsyncThunk de redux/toolkit
export const fetchPockemonWithDetails =  createAsyncThunk(
    'data/fetchPockemonWithDetails',
    async ( _ , {dispatch}) =>{
        dispatch(setLoading(true))
        //dispatch del loader
        //fetch
        //dispatch del loader
        const pockemonRes = await getPokemon()
        
        const pockemonDetailed = await Promise.all(
            pockemonRes.map((pockemon) => getPokemonDetails(pockemon))
            
        )
        dispatch(setPockemons(pockemonDetailed))
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{
        setPockemons: (state, action) => {
            state.pockemons = action.payload
        },
        setFavorite: (state,action)=>{
            const currentPockemonIndex = state.pockemons.findIndex(
                (pockemon) => pockemon.id === action.payload.pockemonId
            )
            if(currentPockemonIndex >= 0){
                const isFavorite = state.pockemons[currentPockemonIndex].favorite
                state.pockemons[currentPockemonIndex].favorite = !isFavorite
            }

        },        
    },
})

export const { setPockemons, setFavorite } = dataSlice.actions
export default dataSlice.reducer;