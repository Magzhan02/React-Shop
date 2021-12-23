import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Info.module.scss"

function Info({imageUrl, title,description ,setStateToCart}) {
  return (
      <div className={styles.emptyCart}>
        <img src={imageUrl} alt="empty" className={styles.image} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.Btn}>
        <Link to="/">
       <button className={styles.greenBtn} onClick={setStateToCart}>
        <img src="/img/arrow.svg" alt="Arrow" className={styles.arrow} />
         Вернутся назад
       </button>
       </Link>
       </div>
      </div>
      
  );
}
export default Info;
