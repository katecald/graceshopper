// CONSTANT
export const CART_QUANTITY = 'CART_QUANTITY'

// ACTION
export const cartQuantity = quantity => ({
  type: CART_QUANTITY,
  payload: +quantity
})

// REDUCER
const quantityReducer = (state = 0, action) => {
  switch (action.type) {
    case CART_QUANTITY:
      return state + action.payload
    default: return state
  }
}

export default quantityReducer
