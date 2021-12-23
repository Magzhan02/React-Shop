import React from 'react';
import { useSelector } from 'react-redux';

import Info from '../components/Info/Info';
import UserCard from '../components/UserCard/UserCard';

function User() {
    const {totalPrice,items} = useSelector(({user}) => user)
    let result = Math.round((totalPrice / 100) * 5)
    let sum = result + totalPrice
  return (
    <div>
     <div className="header__content">
        <h1>Недавно заказанный товар</h1>
     </div>
      <div className="sneakers">
        {
            items.length > 0 ?
            items.map((obj) => <UserCard {...obj} key={obj.id} />)
            : 
            <Info 
            imageUrl="/img/empty-cart.jpg"
            title="Пусто" 
            description="Оформите заказ"
            />
        }
        {
            items.length > 0 &&
            <div>
                <h2>
                    Сумма заказа + Доставка 5%: {sum} руб.
                </h2>
            </div>
        }
      </div>
    </div>
  )
}

export default User;
