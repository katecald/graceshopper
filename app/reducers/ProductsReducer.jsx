import axios from 'axios'

const initialState = {
  products: [{name: 'blah', imageURL: 'whatever', price: 10000}]
}

// CONSTANTS
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

// ACTIONS
const getProducts = (res) => {
  return {
    type: LOAD_PRODUCTS,
    payload: res.data
  }
}

export const loadProducts = () => {
  return dispatch => {
    axios.get('/api/products')
    .then(res => dispatch(getProducts(res)))
  }
}

// REDUCER
const productsReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case LOAD_PRODUCTS:
      newState.products = action.payload
      break
    default: return state
  }
  return newState
}

export default productsReducer
