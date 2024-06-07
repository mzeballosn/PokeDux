/*
# Ya no utilizamos al usar reducer/toolkit
import { combineReducers } from "redux-immutable";
import { pockemonReducer  } from "./pockemons";
import { iuReducer } from "./ui";
//import { combineReducers  } from "redux";
*/

import { combineReducers } from "redux"
import dataReducer from '../slices/dataSlice'
import uiReducer from "../slices/uiSlice"
/*
dejamos de usar por tener reducer/toolkit
const rootReducer = combineReducers({
    data: pockemonReducer,
    ui: iuReducer,
})
*/
const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
})
export default rootReducer