import React from 'react';
import styles from './portfolio.module.scss';

export default function portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className={styles.portfolio_wrapper}>
          <h2>ПОРТФОЛИО</h2>
          <button>Все работы</button>
        </div>
      </div>
    </section>
  )
}
