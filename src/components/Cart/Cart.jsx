import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import { setCartStateAC } from '../../redux/reducers/cartReducers';
import { removeCartItemAC } from '../../redux/reducers/cartReducers';
import { clearItemsAC } from '../../redux/reducers/cartReducers';
import { setItemsToUserCartAC } from '../../redux/reducers/userReducers';

import CartItem from './CartItem';
import Info from '../Info/Info';

function Cart({ cartOpened }) {
  const dispatch = useDispatch();

  const setStateToCart = () => {
    dispatch(setCartStateAC(false));
    setCheckout(false);
  };
  const { totalPrice, items } = useSelector(({ cart }) => cart);

  const [checkout, setCheckout] = React.useState(false);

  const cartItems = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const onRemove = (id) => {
    dispatch(removeCartItemAC(id));
  };
  const OnCheckout = () => {
    setCheckout(true);
    dispatch(setItemsToUserCartAC(cartItems));
    dispatch(clearItemsAC());
  };

  let result = Math.round((totalPrice / 100) * 5); //вычисление процентов

  return (
    <div className={`${styles.wrapper} ${cartOpened ? styles.wrapperVisible : ''}`}>
      {cartItems.length > 0 ? (
        <div className={styles.overlay}>
          <div className={styles.drawer}>
            <h2>
              Корзина
              <img src="/img/btn-remove.svg" alt="Remove" onClick={setStateToCart} />
            </h2>
            <div className={styles.items}>
              {cartItems.map((obj) => (
                <CartItem {...obj} onRemove={onRemove} key={obj.id} />
              ))}
            </div>
            <div className={styles.cartTotal__block}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice}руб.</b>
                </li>
                <li>
                  <span>Доставка 5%:</span>
                  <div></div>
                  <b>{result} руб.</b>
                </li>
              </ul>
              <button className={styles.greenBtn} onClick={OnCheckout}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.overlay}>
          <div className={styles.drawer}>
            <h2>
              Корзина
              <img src="/img/btn-remove.svg" alt="Remove" onClick={setStateToCart} />
            </h2>
            <Info
              imageUrl="/img/empty-cart.jpg"
              title="Корзина пустая"
              description="Добавьте товар в корзину"
              setStateToCart={setStateToCart}
            />
          </div>
        </div>
      )}
      {checkout && (
        <div className={styles.overlay}>
          <div className={styles.drawer}>
            <h2>
              Корзина
              <img src="/img/btn-remove.svg" alt="Remove" onClick={setStateToCart} />
            </h2>
            <Info
              imageUrl="/img/complete-order.png"
              title="Корзина пустая"
              description="Добавьте товар в корзину"
              setStateToCart={setStateToCart}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
