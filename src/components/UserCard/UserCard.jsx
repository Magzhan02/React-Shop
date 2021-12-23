import React from 'react';

import styles from './UserCard.module.scss'

function UserCard({imageUrl,name,price,}) {
  return (
    <div className={styles.card}>
      <img width={145} height={142} src={imageUrl} alt="sneakers" />
      <h5>{name}</h5>
      <div className={styles.buttom}>
        <div className={styles.price}>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
