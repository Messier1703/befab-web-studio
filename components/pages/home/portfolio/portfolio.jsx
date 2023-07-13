import React from 'react';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';
import styles from './portfolio.module.scss';

export default function portfolio() {
  return (
    <section className={styles.portfolio} id='portfolio'>
      <div className="container">
        <div className={styles.portfolio_wrapper}>
          <h2>ПОРТФОЛИО</h2>
          <PurpleButton>Все работы</PurpleButton>
        </div>
      </div>
    </section>
  )
}
