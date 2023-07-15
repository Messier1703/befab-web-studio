import React from 'react';
import styles from './prices.module.scss';
import PricesCards from '@/components/ui/pricesCards/pricesCards';

export default function Prices() {
  return (
    <section className={styles.prices} id='prices'>
      <div className="container">
        <h2>Стоимость разработки Landing page</h2>
        <PricesCards/>
      </div>
    </section>
  )
}
