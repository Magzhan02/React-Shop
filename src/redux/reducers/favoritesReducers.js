const SET_FAVORITES = "SET_FAVORITES"
const REMOVE_ITEM = "REMOVE_ITEM"

const initialState = {
    items: []
};

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITES: {
            const currentItems = !state.items[0] ? [action.payload] : [...state.items[0].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems
                }
            }
            return {
                ...state,
                items: newItems,
            }

        }
        case REMOVE_ITEM:{
            const newItems = {...state.items};
            delete newItems[action.payload];
             return {
                 ...state,
                items: newItems,
             };

        }
        default:
            return state;
    }
}


export const setFavoritesAC = (obj) => ({
    type: 'SET_FAVORITES',
    payload: obj
})

export const removeItemAC = (id) =>({
    type: "REMOVE_ITEM",
    payload: id
})

export default favorites