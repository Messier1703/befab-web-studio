import React from 'react';
import styles from './reviews.module.scss';
import ReviewsCards from '@/components/ui/reviewsCards/reviewsCards';

export default function Reviews() {
  return (
    <section className={styles.reviews} id='reviews'>
      <div className={styles.reviews_wrapper}>
        <div className="container">
          <h2>Что говорят о нашей работе</h2>
        </div>
        <div className={styles.reviews_content}>
          <div className={styles.reviews_deco}>
            <h3>AB</h3>
            <div>
              <img src="/svg/reviews-graph.svg" alt="Graph" />
              <p><span>Более 87%</span> клиентов обращаются к нам повторно</p>
            </div>
          </div>
          <ReviewsCards />
        </div>
      </div>
    </section>
  )
}
