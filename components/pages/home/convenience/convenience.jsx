import React from 'react';
import styles from './convenience.module.scss';
import ConvenienceCards from '@/components/ui/convenienceCards/convenienceCards';

export default function Convenience() {
  return (
    <section className={styles.convenience}>
      <div className="container">
        <div className={styles.convenience_title}>
          <h2>Мы отвечаем за свои решения</h2>
          <div></div>
          <p>Мы не просто разрабатываем и отдаём вам сайт, мы объясняем каждый шаг разработки, именно поэтому наши решения обдуманные и конкурентоспособные.</p>
        </div>
        <ConvenienceCards />
      </div>
    </section>
  )
}
