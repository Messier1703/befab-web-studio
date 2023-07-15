import React from 'react'
import styles from './convenienceForm.module.scss'
import TextInput from '../textInput/textInput'
import PurpleButton from '../purpleButton/purpleButton'

export default function ConvenienceForm() {
  return (
    <div className={styles.convenience_guidance}>
      <div className="container">
        <div className={styles.convenience_guidance_title}>
          <h2>Получите консультацию сейчас</h2>
          <h2>это бесплатно</h2>
        </div>
        <form>
          <TextInput placeholder='Введите имя' />
          <TextInput placeholder='Номер телефона' />
          <TextInput placeholder='Введите e-mail' />
          <PurpleButton>Получить консультацию</PurpleButton>
        </form>
      </div>
    </div>
  )
}
