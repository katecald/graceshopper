import axios from 'axios'
import { LOAD_PRODUCTS, getProducts } from 'APP/app/reducers/ProductsReducer'

// CONSTANTS
export const CLICK_ACTION = 'CLICK_ACTION'

// ACTIONS
const getCart = (res) => {
  return {
    type: CLICK_ACTION,
    payload: res.data
  }
}

// ACTION CREATORS

export const clickAction = (productId) => {
  return dispatch => {
    axios.post('/api/addToCart', {productId})
    .then(res => dispatch(getCart(res)))
  }
}

export const getProductsById = () => {
  return dispatch => {
    axios.get('/api/cart')
    .then(cart => {
      console.log('CART IN AXIOS', cart)
      return Promise.all(
        Object.keys(cart).map(productId =>
          axios.get(`/api/products/${productId}`)
        )
      )
    })
    .then(res => {
      console.log('RES FROM GETPRODUCTSBYID', res)
      dispatch(getProducts(res))
    })
  }
}
// REDUCER
const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CLICK_ACTION:
      return action.payload
    case LOAD_PRODUCTS:
      return action.payload
    default: return state
  }
}

export default cartReducer
