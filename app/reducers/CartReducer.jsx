import axios from 'axios'

// CONSTANTS
export const GOT_CART = 'GOT_CART'
export const DELETED_FROM_CART = 'DELETED_FROM_CART'

// ACTIONS
const gotCart = (res) => {
  return {
    type: GOT_CART,
    payload: res.data
  }
}

const deletedFromCart = (res) => {
  return {
    type: DELETED_FROM_CART,
    payload: res.data
  }
}

// ACTION CREATORS
export const addToCart = (productId, quantity) => {
  return dispatch =>
    axios.post('/api/cart', {productId, quantity})
      // TODO: Maybe make POST /api/cart respond with the cart?
      .then(() => dispatch(getCart()))
      .catch(console.error)
}

export const deleteFromCart = (productId) => {
  return dispatch =>
    axios.put('api/cart', {productId})
      .then(res => dispatch(gotCart(res)))
      .catch(console.error)
}

export const getCart = () => {
  return dispatch =>
    axios.get('/api/cart')
    .then(res => {
      dispatch(gotCart(res))
    })
    .catch(console.error)
}

// REDUCER
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CART:
      return action.payload
    case DELETED_FROM_CART:
      return action.payload
    default: return state
  }
}

export default cartReducer
