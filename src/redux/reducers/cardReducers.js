import axios from "axios"
import { JSON_API } from "../../helpers/Constants"
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
    axios.get(JSON_API)
    .then((res) => {
      dispatch(setItemsAC(res.data.items));
    })
    
}

export default card

