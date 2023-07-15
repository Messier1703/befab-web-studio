'use client'
import React, { useEffect } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import PurpleButton from '../purpleButton/purpleButton';
import OutlinedButton from '../outlinedButton/outlinedButton';

export default function Header() {
  useEffect(() => {
    const headerScroll = () => {
      const header = document.querySelector("header");
      const scroll = window.scrollY || document.documentElement.scroll;

      if (scroll > 0) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", headerScroll);

    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link href="#">BeFab Web Studio</Link>
      <ul>
        <li><Link href="#portfolio">Портфолио</Link></li>
        <li><Link href="#offers">Что мы делаем</Link></li>
        <li><Link href="#prices">Тарифы</Link></li>
        <li><Link href="#reviews">Отзывы</Link></li>
      </ul>
      <OutlinedButton>
        Показать контакты
      </OutlinedButton>
    </header>
  )
}
