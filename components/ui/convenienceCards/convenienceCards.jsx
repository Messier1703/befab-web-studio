import React from 'react'
import { convenienceCards } from '@/constants/convenienceCards';
import styles from './convenienceCards.module.scss';

export default function ConvenienceCards() {
  return (
    <div className={styles.convenience_cards}>
      {convenienceCards.map((card) => (
        <article className={styles.convenience_card} key={card.id}>
          <h4>{card.title}</h4>
          <div>
            <h2>0{card.id}</h2>
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
