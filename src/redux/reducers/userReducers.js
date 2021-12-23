const initialState = {
    items:[],
    totalPrice: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

function user (state = initialState, action){
 

    switch (action.type) {
        case 'SET_ITEMS_TO_USER_CART':{
           const arr = action.payload
           const price = getTotalPrice(arr)
            return {
                ...state,
                items:action.payload,
                totalPrice: price
            };
        }
        default:
            return state
    }
}

export const setItemsToUserCartAC = (items) => ({type:"SET_ITEMS_TO_USER_CART", payload: items }) 


export default user