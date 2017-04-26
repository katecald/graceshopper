import axios from 'axios'

// CONSTANTS
const LOAD_PRODUCT = 'LOAD_PRODUCT'

// ACTIONS
const getProduct = (res) => {
  return {
    type: LOAD_PRODUCT,
    payload: res.data
  }
}

// ACTION CREATORS
export const loadProduct = (id) => {
  return dispatch => {
    axios.get(`/api/products/${id}`)
    .then(res => dispatch(getProduct(res)))
  }
}

// REDUCER
const productReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return action.payload
    default:
      return state
  }
}

export default productReducer
