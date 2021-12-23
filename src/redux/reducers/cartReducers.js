const SET_CART_STATE = "SET_CART_STATE"
const SET_ITEMS_TO_CART = "SET_ITEMS_TO_CART"


const initialState = {
    items: [],
    cartState: false,
    totalPrice: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS_TO_CART': {
            const currentItems = !state.items[0] ? [action.payload] : [...state.items[0].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems)
                }
            }
            const items = Object.values(newItems).map(obj => obj.items);
            const arrTotalPrice = [].concat.apply([], items)
            const totalPrice = getTotalPrice(arrTotalPrice)

            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice
            };

        }
        case 'SET_CART_STATE': {
            return {
                ...state,
                cartState: action.payload
            };
        }
        case 'ON_REMOVE_ITEM': {
           const newItems = {...state.items};
           const currentTotalPrice = newItems[action.payload].totalPrice;
           delete newItems[action.payload];
            return {
                ...state,
               items: newItems,
               totalPrice: state.totalPrice - currentTotalPrice
            };
        }
        case 'CLEAR_ITEMS': {
             return {
                 ...state,
                items: [],
                totalPrice: 0
             };
         }
        default:
            return state;
    }
}
export const setItemsToCartAC = (obj) => ({
    type: "SET_ITEMS_TO_CART",
    payload: obj
})

export const setCartStateAC = (bool) => ({
    type: "SET_CART_STATE",
    payload: bool
})

export const removeCartItemAC = (id) =>({
    type: 'ON_REMOVE_ITEM',
    payload: id
  })

export const clearItemsAC = () =>({
    type: 'CLEAR_ITEMS'
  })

export default cart