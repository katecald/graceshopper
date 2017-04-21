import axios from 'axios'

// CONSTANTS
export const GOT_CART = 'GOT_CART'

// ACTIONS
const gotCart = (res) => {
  console.log('gotCart', res.data)
  return {
    type: GOT_CART,
    payload: res.data
  }
}

// ACTION CREATORS
export const clickAction = (productId, quantity) => {
  return dispatch => {
    axios.post('/api/cart', {productId, quantity})
  }
}

export const getCart = () => {
  return dispatch => {
    axios.get('/api/cart')
    .then(res => {
      console.log('getcart', res)
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
