import React from 'react'

import skeleton from '../skeleton.module.css'
import styles from './Card.module.css'

export default function CardActions ({actions}) {
  return <ul className={styles.actions}>
    {actions.map(action => {
      return <li key={action}><button className={skeleton.dark}>{action}</button></li>
    })}
  </ul>
}
