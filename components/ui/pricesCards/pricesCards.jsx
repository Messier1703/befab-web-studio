import React from 'react';
import styles from './pricesCards.module.scss';
import { urgentPackage } from '@/constants/pricesCards';
import { perfectPackage } from '@/constants/pricesCards';
import PurpleButton from '../purpleButton/purpleButton';

export default function PricesCards() {


  return (
    <div className={styles.prices_cards}>
      <article className={styles.prices_card}>
        <h4>тариф “идеальный”</h4>
        <div className={styles.prices_card_wrapper}>
          <div className={styles.prices_card_benefits}>
            <ul>
              <li>lorem</li>
              <li>ipsum</li>
              <li>dolor</li>
            </ul>
            <ul>
              <li>lorem</li>
              <li>ipsum</li>
              <li>dolor</li>
            </ul>
          </div>
          <div className={styles.prices_card_price}>
            <p>срок разработки: 9-18 дней</p>
            <h3>32 000 руб.</h3>
            <PurpleButton>Заказать лендинг</PurpleButton>
          </div>
        </div>
      </article>
      <article className={styles.prices_card}>
        <h4>тариф “идеальный”</h4>
        <div className={styles.prices_card_wrapper}>
          <div className={styles.prices_card_benefits}>
            <ul>
              <li>lorem</li>
              <li>ipsum</li>
              <li>dolor</li>
            </ul>
            <ul>
              <li>lorem</li>
              <li>ipsum</li>
              <li>dolor</li>
            </ul>
          </div>
          <div className={styles.prices_card_price}>
            <p>срок разработки: 9-18 дней</p>
            <h3>32 000 руб.</h3>
            <PurpleButton>Заказать лендинг</PurpleButton>
          </div>
        </div>
      </article>
    </div>
  );
}
