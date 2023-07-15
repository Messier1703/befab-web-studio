import React from 'react';
import { offersCards } from '@/constants/offersCards';
import styles from './offersCards.module.scss';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {duration: 1, delay: custom * 0.2 },
  }),
};

const rightAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {duration: 0.8, delay: custom * 0.2 },
  }),
};

const imgAnimation = {
  hidden: {
    scale: 0,
  },
  visible: custom => ({
    rotate: 360,
    scale: 1,
    transition: {duration: 2, delay: custom * 0.2 },
  }),
};

export default function OffersCards() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={styles.offers_cards}
    >
      {offersCards.map((card) => (
        <article className={styles.offers_card} key={card.id}>
          <motion.h4
          variants={textAnimation}
          >{card.title}</motion.h4>
          <hr />
          <div>
            <motion.img
              src={card.svg}
              alt="Icon"
              variants={imgAnimation}
              // custom={5}
            />
            <motion.p
            variants={rightAnimation}
            custom={3}
            >{card.description}</motion.p>
          </div>
        </article>
      ))}
    </motion.div>
  )
}
