// CONSTANT
export const CART_QUANTITY = 'CART_QUANTITY'

// ACTION
export const cartQuantity = quantity => ({
  type: CART_QUANTITY,
  payload: +quantity
})

// REDUCER
const quantityReducer = (state = [], action) => {
  switch (action.type) {
    case CART_QUANTITY:
      return [[...state, action.payload].reduce((a, b) => { return a + b }, 0)]
    default: return state
  }
}

export default quantityReducer
