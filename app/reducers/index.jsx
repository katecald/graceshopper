import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./ProductsReducer').default,
  product: require('./ProductReducer').default
})

export default rootReducer
