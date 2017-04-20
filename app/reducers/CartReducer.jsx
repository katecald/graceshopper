import axios from 'axios'

// CONSTANTS
export const CLICK_ACTION = "CLICK_ACTION" 

// ACTIONS
const getCart = (res) => {
  return {
    type: CLICK_ACTION,
    payload: res.data
  }
}

//ACTION CREATORS

export const clickAction = (productId) => {
  return dispatch => {
    axios.post('/api/addToCart', {productId})
    .then(res => dispatch(getCart(res)))
  }
}
      
// REDUCER
const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CLICK_ACTION:
      return action.payload
    default: return state
  }
}

export default cartReducer
