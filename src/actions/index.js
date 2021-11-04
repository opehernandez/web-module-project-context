export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'






export const addItemToCart = (product)=> {
    console.log('actions')
    return ({type: ADD_ITEM_TO_CART, payload:product})
}