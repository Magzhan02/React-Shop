import { createStore,applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";

import rootReduce from "./reducers"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReduce,composeEnhancers(applyMiddleware(thunk)))

window.store = store

export default store;