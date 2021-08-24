import React from 'react'

import {useSkeleton} from '../skeleton-context.jsx'
import styles from './Card.module.css'

export default function CardActions ({actions}) {
  return <ul className={styles.actions}>
    {actions.map(action => {
      return <li key={action}><button className={useSkeleton('dark')}>{action}</button></li>
    })}
  </ul>
}
