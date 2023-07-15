'use client'
import React from 'react';
import styles from './main.module.scss';
import Link from 'next/link';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Main() {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      className={styles.main}
    >
      <div className="container">
        <div className={styles.main_wrapper}>
          <div className={styles.main_content}>
            <motion.h1 variants={textAnimation}>Создаем лендинги</motion.h1>
            <motion.h2 custom={1} variants={textAnimation}>для вашего бизнеса</motion.h2>
            <motion.h3 custom={2} variants={textAnimation}>с продуманным дизайном для роста продаж</motion.h3>
            <PurpleButton>Заказать лендинг</PurpleButton>
            <p>лендинги / корпоративные сайты / лендомагазины / квизы</p>
          </div>
        </div>
      </div>
      <button className={styles.main_more}>Узнать больше</button>
    </motion.main>
  )
}
