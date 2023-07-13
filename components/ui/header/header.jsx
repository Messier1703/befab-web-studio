import React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="#">BeFab Web Studio</Link>
      <ul>
        <li><Link href="#portfolio">Портфолио</Link></li>
        <li><Link href="#offers">Что мы делаем</Link></li>
        <li><Link href="#prices">Тарифы</Link></li>
        <li><Link href="#reviews">Отзывы</Link></li>
      </ul>
      <button>Показать контакты</button>
    </header>
  )
}
