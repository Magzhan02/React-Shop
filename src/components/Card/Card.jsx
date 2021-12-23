import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Card.module.scss';

import { setItemsToCartAC } from '../../redux/reducers/cartReducers';
import { setFavoritesAC } from '../../redux/reducers/favoritesReducers';
import { removeCartItemAC } from '../../redux/reducers/cartReducers';

function Card(card) {
  const { name, price, imageUrl, id } = card;
  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = React.useState(false);

  const [isFavorite, setFavorite] = React.useState(false);

  const { items } = useSelector(({ cart }) => cart);
  const favorit = useSelector(({ favorite }) => favorite.items);

  const cartItems = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const favoriteItems = Object.keys(favorit).map((key) => {
    return favorit[key].items[0];
  });

  React.useEffect(() => {
    if (cartItems.find((obj) => Number(obj.id) === Number(card.id))) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, card.id]);

  React.useEffect(() => {
    if (favoriteItems.find((obj) => Number(obj.id) === Number(card.id))) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [favoriteItems, card.id]);

  const setItemsToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      dispatch(removeCartItemAC(id));
    } else {
      dispatch(setItemsToCartAC(obj));
    }
  };

  const setFavorites = () => {
    dispatch(setFavoritesAC(card));
    setFavorite(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={setFavorites}>
        <img
          width={18}
          height={18}
          src={isFavorite ? '/img/favoriteGoldIcon.svg' : '/img/favoriteNotIcon.svg'}
          alt="favorite"
        />
      </div>
      <img width={145} height={142} src={imageUrl} alt="sneakers" />
      <h5>{name}</h5>
      <div className={styles.buttom}>
        <div className={styles.price}>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <img
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
          className={styles.button}
          onClick={setItemsToCart.bind(this, card)}
        />
      </div>
    </div>
  );
}

export default Card;
