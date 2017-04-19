import axios from 'axios'

const initialState = {
    cart: {}
}

// CONSTANTS
export const CLICK_ACTION = "CLICK_ACTION" 

// ACTIONS
const getCart = (res) => {
  return {
    type: CLICK_ACTION,
    payload: res.data
  }
}

export const clickAction = (productId) => {
  return dispatch => {
    axios.get('/api/addToCart', productId)
    .then(res => dispatch(getCart(res)))
  }
}
      
// REDUCER
const cartReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case CLICK_ACTION:
      newState.cart = action.payload
      break
    default: return state
  }
  return newState
}

export default cartReducer

