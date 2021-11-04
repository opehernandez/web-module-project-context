import { ADD_ITEM_TO_CART } from './../actions'
import data from './../data';

export const initialState = {
    products: data,
    cart: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cart : [...state.cart, action.payload]
            }
        default:
            return state
    }
}


export default reducer