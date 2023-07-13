import React from 'react';
import styles from './convenience.module.scss';
import ConvenienceCards from '@/components/ui/convenienceCards/convenienceCards';
import PurpleButton from '@/components/ui/purpleButton/purpleButton';
import TextInput from '@/components/ui/textInput/textInput';

export default function Convenience() {
  return (
    <section className={styles.convenience}>
      <div className="container">
        <div className={styles.convenience_title}>
          <h2>Мы отвечаем за свои решения</h2>
          <div>
            <h6>как именно</h6>
            <hr />
          </div>
          <p>Мы не просто разрабатываем и отдаём вам сайт, мы объясняем каждый шаг разработки, именно поэтому наши решения обдуманные и конкурентоспособные.</p>
        </div>
        <ConvenienceCards />
      </div>
      <div className={styles.convenience_guidance}>
        <div className="container">
          <h2>Получите консультацию сейчас</h2>
          <h2>это бесплатно</h2>
          <form>
            <TextInput placeholder='Введите имя' />
            <TextInput placeholder='Номер телефона' />
            <TextInput placeholder='Введите e-mail' />
            <PurpleButton>Получить консультацию</PurpleButton>
          </form>
        </div>
      </div>
    </section>
  )
}
