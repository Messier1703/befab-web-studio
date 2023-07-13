import React from 'react';
import styles from './reviewsCards.module.scss';
import Image from 'next/image';
import { reviewsCards } from '@/constants/reviewsCards';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';

const ReviewsCards = () => {
  return (
    <div className={styles.reviews_cards}>
      {reviewsCards.map((card) => (
        <article>
          <Image className={styles.reviews_img} src={card.img} width={126} height={279} />
          <h4>{card.name}</h4>
          <h6>{card.job}</h6>
          <p>{card.review}</p>
          <PurpleButton className={styles.reviews_btn}>Посмотреть рекомендацию</PurpleButton>
        </article>
      ))}
    </div>
  );
};

export default ReviewsCards;