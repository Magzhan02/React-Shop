import React from 'react'
import styles from "./Cart.module.scss"

const CartItem = cartInfo => {
  const {name,price,imageUrl,id,onRemove} = cartInfo
    return (
        <div className={styles.cart__item}>
          <img src={imageUrl} alt='sneakers' className={styles.cartItem__image}/>
          <div className={styles.cart__info}>
            <p>{name}</p>
            <b>{price} руб.</b>
          </div>
          <img src="/img/btn-remove.svg" alt="Remove"
           className={styles.remove__btn} 
           onClick={onRemove.bind(this,id)}
          />
        </div>
    )
}

export default CartItem
