import axios from 'axios'

const initialState = {
    cart: {}
}


const CLICK_ACTION = "CLICK_ACTION" 

export const clickAction = () => dispatch => {
    axios.get('/api/addToCart')
    .then(res => {
        return {
            type: CLICK_ACTION, 
            payload: res.data
        }
    })
}
      

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

