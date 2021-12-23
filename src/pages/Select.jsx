import React from 'react'
import { useSelector } from 'react-redux';

import Info from '../components/Info/Info';
import SelectCard from '../components/SelectCard/SelectCard';

function Select() {
  const {items} = useSelector(({favorite}) => favorite)
  const SelectItems = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
    return (
        <div>
        <div className="header__content">
          <h1>Мои закладки</h1>
        </div>
        {
          SelectItems.length > 0 ?
          <div className="sneakers" > 
          {
           SelectItems.map((obj) => (
              <SelectCard {...obj} key={obj.id} />
            ))
          }
         </div>
         :
         <Info
          imageUrl="./img/empty-cart.jpg"
          title="Нет закладок "
          description="Добавьте товар в закладки"
          />
        }
    
   </div>
    )
}

export default Select
