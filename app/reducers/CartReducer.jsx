import axios from 'axios'

// CONSTANTS
export const GOT_CART = 'GOT_CART'

// ACTIONS
const gotCart = (res) => {
  return {
    type: GOT_CART,
    payload: res.data
  }
}

// ACTION CREATORS

export const addToCart = (productId) => {
  return dispatch => {
    axios.post('/api/addToCart', {productId})
  }
}

export const getCart = () => {
  return dispatch => {
    axios.get('/api/cart')
    .then(res => {
      dispatch(gotCart(res)) })
  }
}
// REDUCER
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CART:
      return action.payload
    default: return state
  }
}

export default cartReducer
