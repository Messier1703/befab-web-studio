import React from 'react';
import styles from './reviews.module.scss';
import ReviewsCards from '@/components/ui/reviewsCards/reviewsCards';

export default function Reviews() {
  return (
    <section className={styles.reviews} id='reviews'>
      <div className="container">
        <h2>Что говорят о нашей работе</h2>
        <ReviewsCards></ReviewsCards>
      </div>
    </section>
  )
}
