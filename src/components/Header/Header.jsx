import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { setCartStateAC } from '../../redux/reducers/cartReducers';



function Header () {
  const dispatch = useDispatch();

  const setStateToCart = () => {
    dispatch(setCartStateAC(true));
  };
  const { totalPrice } = useSelector(({ cart }) => cart);

  return (
    <header className={styles.header}>
      <Link to="/">
      <div className={styles.left}>
        <img width={60} height={60} src="/img/logo.png" alt='logo' />
        <div className={styles.info}>
          <h2>REACT SHOP</h2>
          <p>Магазин кроссовок</p>
        </div>
      </div>
      </Link>
      <ul className={styles.right}>
        <li onClick={setStateToCart}>
          <img width={18} height={18} src="/img/cart.svg" alt='cart' />
          <span>{totalPrice} руб</span>
        </li>
        <li>
          <Link to="favorit">
          <img width={18} height={18} src="/img/favoriteIcon.svg" alt='favorite-icon'/>
          </Link>
        </li>
        <li>
        <Link to="user">
          <img width={18} height={18} src="/img/user.svg" alt='user-svg' />
        </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
