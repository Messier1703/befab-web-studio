import React from 'react';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';
import styles from './portfolio.module.scss';
import PortfolioSwiper from '@/components/ui/portfolioSwiper/portfolioSwiper';

export default function portfolio() {
  return (
    <section className={styles.portfolio} id='portfolio'>
      <div className="container">
        <div className={styles.portfolio_wrapper}>
          <div className={styles.portfolio_background}>
            <h2>ПОРТФОЛИО</h2>
            <PurpleButton>Все работы</PurpleButton>
          </div>
          <div className={styles.portfolio_foreground}>
            <PortfolioSwiper/>
          </div>
        </div>
      </div>
    </section>
  )
}
