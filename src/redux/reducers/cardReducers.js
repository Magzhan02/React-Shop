import axios from "axios"

const initialState = {
    items:[],
    isLoading: false,
}

const card = (state = initialState, action) =>{
    switch (action.type){
        case 'SET_ITEMS': {
            return {
                ...state,
                items:action.payload,
                isLoading:true
            }
        }
        default:
        return state;
    }
}

export const setItemsAC = (items) => ({type: 'SET_ITEMS',payload: items})


//redux-thunk
export const fetchItems = () => (dispatch) =>{
    axios.get('http://localhost:3001/items')
    .then((res) => {
      dispatch(setItemsAC(res.data));
    })
    
}

export default card

