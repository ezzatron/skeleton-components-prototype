import React from 'react'

import {useDarkSkeleton} from '../skeleton-context.jsx'
import styles from './Card.module.css'

export default function CardActions ({actions}) {
  return <ul className={styles.actions}>
    {actions.map(action => {
      return <li key={action}><button className={useDarkSkeleton()}>{action}</button></li>
    })}
  </ul>
}
