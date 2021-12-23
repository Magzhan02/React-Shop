import { combineReducers } from "redux";

import cartReducers from "./cartReducers"
import cardReducers from "./cardReducers"
import favoriteReducers from "./favoritesReducers";
import userReducers from "./userReducers";

const rootReduce = combineReducers({
    cart:cartReducers,
    card:cardReducers,
    favorite:favoriteReducers,
    user: userReducers
})

export default rootReduce;