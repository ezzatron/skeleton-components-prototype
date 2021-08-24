import clsx from 'clsx'
import React from 'react'

import {skeletonize} from '../skeleton.module.css'
import styles from './Card.module.css'

export default function CardList ({children, skeleton}) {
  const className = clsx(styles.cardList, {
    [skeletonize]: skeleton,
  })

  return <div className={className}>{children}</div>
}
