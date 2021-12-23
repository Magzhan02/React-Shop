import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

import styles from './SelectCard.module.scss';
import { setItemsToCartAC } from '../../redux/reducers/cartReducers';
import { removeItemAC } from '../../redux/reducers/favoritesReducers'
import { removeCartItemAC } from '../../redux/reducers/cartReducers'

function SelectCard (card) {
  const { name, price, imageUrl,id} = card;
  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = React.useState(false);

  const RemoveFavorit = (id) =>{
    dispatch(removeItemAC(id))
  }

  const { items } = useSelector(({ cart }) => cart);

  const cartItems = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const setItemsToCart = (obj) => {
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
      dispatch(removeCartItemAC(id))
      setIsAdded(false)
    }else{
      dispatch(setItemsToCartAC(obj));
      setIsAdded(true); 
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={RemoveFavorit.bind(this,card.id)}>
      <img src="/img/btn-remove.svg" alt="Remove"/>
      </div>
      <img width={145} height={142} src={imageUrl} alt="sneakers" />
      <h5>{name}</h5>
      <div className={styles.buttom}>
        <div className={styles.price}>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <img
          width={11}
          height={11}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
          className={styles.button}
          onClick={setItemsToCart.bind(this, card)}
        />
      </div>
    </div>
  );
};

export default SelectCard;
