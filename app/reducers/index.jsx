import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  // This is an option!
  //
  // products: combineReducers({
  //   all: require('./ProductsReducer').default,
  //   current: require('./ProductReducer').default
  // }),
  cart: require('./CartReducer').default,
  products: require('./ProductsReducer').default,
  product: require('./ProductReducer').default,
  cartQuantity: require('./QuantityReducer').default
})

export default rootReducer
