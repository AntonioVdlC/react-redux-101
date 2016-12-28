import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { getProducts } from './actions'
import rootReducer from './reducers'

import App from './App'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

store.dispatch(getProducts())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
