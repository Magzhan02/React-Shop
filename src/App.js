import React from 'react'
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import { fetchItems } from "./redux/reducers/cardReducers"
import {Sneackers,Select,User} from "./pages"
 
function App() {
  const dispatch = useDispatch()
  const cartOpened = useSelector(({ cart }) => cart.cartState);
  React.useEffect(() => {
      dispatch(fetchItems())
  },[dispatch])
  return (
  <div>
    <div className='wrapper'>
     <Cart cartOpened={cartOpened}/> 
     <Header/>
     <div className="content">
        <Switch>
        <Route  path='/' component={Sneackers} exact/>
        <Route  path='/favorit' component={Select} exact/>
        <Route  path='/user' component={User} exact/>
        </Switch>
     </div>
    </div> 
  </div>
  
  );
}

export default App;
 