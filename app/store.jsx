import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {whoami} from './reducers/auth'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      // fake redux Promise middleware 
      store => next => action => typeof action.then === 'function'
        ? action.then(next)
        : next(action),
      thunkMiddleware,
    )
  )
)

export default store

// Set the auth info at start
store.dispatch(whoami())

import {getCart} from './reducers/CartReducer'
store.dispatch(getCart())