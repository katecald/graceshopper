import axios from 'axios'

// CONSTANTS
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

// ACTIONS
const getProducts = (res) => {
  return {
    type: LOAD_PRODUCTS,
    payload: res.data
  }
}

export const loadProducts = () =>
  axios.get('/api/products')
    .then(getProducts)

// REDUCER
const productsReducer = (state = [], action) => {
  // CR: Maybe don't always make a copy (see ProductReducer.jsx)
  const newState = {...state}
  switch (action.type) {
    case LOAD_PRODUCTS: return action.payload
    default: return state
  }
}

export default productsReducer
