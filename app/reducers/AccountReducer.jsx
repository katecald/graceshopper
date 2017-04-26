import axios from 'axios'

// CONSTANTS
export const GOT_ORDERS = 'GOT_ORDERS'

// ACTIONS
const gotOrders = (res) => {
  return {
    type: GOT_ORDERS,
    payload: res.data
  }
}

// ACTION CREATORS
export const loadAccount = (userId) => {
  return dispatch =>
    axios.get(`/api/account/${userId}`)
      .then((orders) => dispatch(gotOrders(orders)))
      .catch(console.error)
}

// REDUCER
const accountReducer = (state = [], action) => {
   switch(action.type) {
      case GOT_ORDERS:
       return action.payload
      default:
        return state
    }
}

export default accountReducer
