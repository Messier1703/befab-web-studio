import React from 'react'
import OffersCards from '@/components/ui/offersCards/offersCards';
import styles from './offers.module.scss';

export default function Offers() {
  return (
    <section className={styles.offers} id='offers'>
      <div className="container">
        <div className={styles.offers_wrapper}>
          <div className={styles.offers_title}>
            <div>
              <h6>что мы делаем</h6>
              <hr />
            </div>
            <h2>Мы разрабатываем лендинги, которые <span>раскрывают идею</span> вашего бизнеса перед целевой аудиторией, и <span>выстраиваем предложение</span>, от которого клиенты просто не могут отказаться.</h2>
          </div>
          <OffersCards />
        </div>
      </div>
    </section>
  )
}
