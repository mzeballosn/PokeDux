import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { pockemonReducer } from './reducers/pockemons.js'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(pockemonReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />    
    </Provider>
  </React.StrictMode>,
)
