import clsx from 'clsx'
import React from 'react'

import styles from './Card.module.css'

export default function CardList ({children}) {
  return <div className={styles.cardList}>{children}</div>
}
