import React from 'react';
import styles from './footer.module.scss';
import PurpleButton from '../purpleButton/purpleButton';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_particulars}>
            <h6>Реквизиты</h6>
            <p>ИП Стрилецкий М.И.</p>
            <p>ИНН: 325250353986</p>
            <p>ОГРНИП: 319237500175805</p>
          </div>
          <div className={styles.footer_contact}>
            <h6>Контакты</h6>
            <a href="#">+7 (900) 293-64-55</a>
            <a href="#">info@befab.ru</a>
            <div className={styles.footer_logos}>
              <img src="/svg/whatsapp-logo.svg" alt="WhatsApp" />
              <img src="/svg/telegram-logo.svg" alt="Telegram" />
              <img src="/svg/viber-logo.svg" alt="Viber" />
            </div>
          </div>
          <nav className={styles.footer_nav}>
            <PurpleButton>Заказать звонок</PurpleButton>
            <PurpleButton>Скачать бриф</PurpleButton>
          </nav>
          <div className={styles.footer_copyright}>
            <p>© Все права защищены | BeFab Web Studio 2020</p>
            <p>Политика конфиденциальности </p>
            <p>Предложение носит информационный характер и не является публичной офертой</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
