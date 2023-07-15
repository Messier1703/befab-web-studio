'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import styles from './reviewsCards.module.scss';
import Image from 'next/image';
import { reviewsCards } from '@/constants/reviewsCards';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';
import 'swiper/css/bundle';
import OutlinedButton from "../outlinedButton/outlinedButton";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

const ReviewsCards = () => {
  return (
    <Swiper
      grabCursor
      loop
      spaceBetween={170}
      slidesPerView={3}
      width={1000}
      // centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className={styles.reviews_cards}
    >
      {reviewsCards.map((card) => (
        <SwiperSlide>
          <article className={styles.reviews_card} key={index}>
            <Image className={styles.reviews_img} src={card.img} width={126} height={279} alt="Review"/>
            <h4>{card.name}</h4>
            <h6>{card.job}</h6>
            <p>{card.review}</p>
            <OutlinedButton className={styles.reviews_btn}>Посмотреть рекомендацию</OutlinedButton>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCards;