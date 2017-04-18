const initialState = {
  currentProduct: {name: 'santa', imageURL: 'http://img.clipartall.com/anime-santa-claus-clipart-clipart-santa-claus-3500_3282.png', price: 10000, description: 'santa!'}
}

const productReducer = (state = initialState, action) => {
  return state
}

export default productReducer
// const getProduct = (res) => {
//   return {
//     type: LOAD_PRODUCT,
//     payload: res.data
//   }
// }

// export const loadProduct = () => {
//   return dispatch => {
//     axios.get('/api/products')
//     .then(res => dispatch(getProducts(res)))
//   }
// }
