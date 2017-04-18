import axios from 'axios';

const initialState = {
    products: ["santa claus"]
}

//CONSTANTS
export const LOAD_PRODUCTS = "LOAD_PRODUCTS"

//ACTIONS
export const loadProducts = () => {
    return dispatch => {
        axios.get('/api/products')
            .then(res => {
            console.log("SJDKHKSDJH", res)
                return {
                    type: LOAD_PRODUCTS,
                    payload: res.data
                }
            })
    }
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            console.log("SJDKHKSDJH", action)
            return { ...state, products: action.payload }
        default: return state
    }
}