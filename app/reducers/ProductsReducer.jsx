import axios from 'axios'

const initialState = {
  products: [{name: 'blah', imageURL: 'whatever', price: 10000}]
}

// CONSTANTS
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

const getProducts = (res) => {
  return {
    type: LOAD_PRODUCTS,
    payload: res.data
  }
}

// ACTIONS
export const loadProducts = () => {
  return dispatch => {
    axios.get('/api/products')
    .then(res => dispatch(getProducts(res)))
  }
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      console.log('ACTION PAYLOAD IN REDUCER', action.payload)
      return { ...state, products: action.payload }
    default: return state
  }
}

export default productsReducer
