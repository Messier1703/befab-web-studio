import React from 'react'
import OffersCards from '@/components/ui/offersCards/offersCards';
import styles from './offers.module.scss';
import { motion } from 'framer-motion';

const titleAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { duration: 2, delay: custom * 0.2 },
  }),
};

export default function Offers() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.offers}
      id='offers'>
      <div className="container">
        <div className={styles.offers_wrapper}>
          <div className={styles.offers_title}>
            <div>
              <h6>что мы делаем</h6>
              {/* <hr /> */}
            </div>
            <motion.h2
              variants={titleAnimation}
              custom={1}
            >
              Мы разрабатываем лендинги, которые <span>раскрывают идею</span> вашего бизнеса перед целевой аудиторией, и <span>выстраиваем предложение</span>, от которого клиенты просто не могут отказаться.
            </motion.h2>
          </div>
          <OffersCards />
        </div>
      </div>
    </motion.section>
  )
}
