import React from 'react';
import { offersCards } from '@/constants/offersCards';
import styles from './offersCards.module.scss';

export default function OffersCards() {
  return (
    <div className={styles.offers_cards}>
      {offersCards.map((card) => (
        <article className={styles.offers_card} key={card.id}>
          <h4>{card.title}</h4>
          <hr />
          <div>
            <img src={card.svg} alt="Icon" />
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
