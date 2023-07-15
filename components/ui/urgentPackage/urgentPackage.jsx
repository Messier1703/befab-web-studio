import React from 'react'

export const mainBenefits = [
    'для стартапа', 'для малого и среднего бизнеса', 'для тестирования ниши',
]

export const benefits = [
    'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты', 'продающие тексты',
]

export const packageTitle = 'тариф “идеальный”'

export default function UrgentPackage() {
  return (
    <div>
      <article>
        <h2>{packageTitle}</h2>
        <ul>
        {mainBenefits.map((card) => (
        <li>{card.mainBenefits}</li>
      ))}
        </ul>
        <ul></ul>
      </article>
    </div>
  )
}
