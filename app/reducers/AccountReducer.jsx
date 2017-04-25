import axios from 'axios'

// Constants

export const GOT_ORDERS = 'GOT_ORDERS'

// ACTIONS
const gotOrders = (res) => {
  return {
    type: GOT_ORDERS,
    payload: res.data
  }
}

//Action creators

export const loadAccount = (userId) => {
  return dispatch =>
    axios.get('/api/account', {userId})
        .then(dispatch(gotOrders()))
        .catch(console.error)
}

const accountReducer = (state = [], action) => {
   switch(action.type) {
      case GOT_ORDERS:
       return action.payload
      default:
        return state
    }
}

export default accountReducer
