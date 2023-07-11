import React from 'react';
import styles from './main.module.scss';
import Link from 'next/link';

export default function Main() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main_wrapper}>
          <div className={styles.main_content}>
            <h1>Создаем лендинги</h1>
            <h2>для вашего бизнеса</h2>
            <h3>с продуманным дизайном для роста продаж</h3>
            <button>Заказать лендинг</button>
            <p>лендинги / корпоративные сайты / лендомагазины / квизы</p>
          </div>
        </div>
      </div>
    </main>
  )
}
