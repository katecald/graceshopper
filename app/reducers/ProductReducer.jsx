import axios from 'axios'

const initialState = {
  currentProduct: {}
}

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
const productReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case LOAD_PRODUCT:
      newState.currentProduct = action.payload
      break
    default:
      return state
  }
  return newState
}

export default productReducer
