import axios from 'axios'

// CONSTANTS
const LOAD_PRODUCT = 'LOAD_PRODUCT'

// ACTIONS
export const loadProduct = (id) => {
  return dispatch => {
    axios.get(`/api/products/${id}`)
    .then(res => dispatch(getProduct(res)))
  }
}

const getProduct = (res) => {
  return {
    type: LOAD_PRODUCT,
    payload: res.data
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
