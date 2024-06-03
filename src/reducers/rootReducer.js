import { combineReducers } from "redux-immutable";
import { pockemonReducer  } from "./pockemons";
import { iuReducer } from "./ui";
//import { combineReducers  } from "redux";

const rootReducer = combineReducers({
    data: pockemonReducer,
    ui: iuReducer,
})

export default rootReducer