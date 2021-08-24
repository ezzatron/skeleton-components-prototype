import React from 'react'

import styles from './Card.module.css'

export default function CardBody ({children}) {
  return <div className={styles.body}>{children}</div>
}
