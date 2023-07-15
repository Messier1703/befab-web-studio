import React from 'react';
import styles from './portfolioSwiper.module.scss';
import PortfolioCard from '../portfolioCard/portfolioCard';

export default function PortfolioSwiper() {
  return (
    <div className={styles.portfolio_scroll}>
      <div>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
      </div>
      <div>
      <PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
<PortfolioCard/>
      </div>
    </div>
  )
}
