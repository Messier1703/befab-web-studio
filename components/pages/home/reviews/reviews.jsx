import React from 'react';
import styles from './reviews.module.scss';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <h2>Что говорят о нашей работе</h2>
        <PurpleButton>huy</PurpleButton>
      </div>
    </section>
  )
}
