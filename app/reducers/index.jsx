import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./ProductsReducer').default
  cart: require('./CartReducer').default  
})

export default rootReducer
