import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { pockemonReducer } from './reducers/pockemons.js'
import { Provider } from 'react-redux'
//import { legacy_createStore as createStore,compose } from 'redux'
import {compose,  applyMiddleware,legacy_createStore as createStore} from 'redux'
import { logger } from './middleware'
import { thunk } from 'redux-thunk'

/* no funciona con esta version de redux
const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(thunk, logger)
);


const store = createStore(pockemonReducer,composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />    
    </Provider>
  </React.StrictMode>,
)