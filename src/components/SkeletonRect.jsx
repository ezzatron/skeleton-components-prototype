import clsx from 'clsx'
import React from 'react'

import styles from './Skeleton.module.css'

export default function SkeletonRect ({className}) {
  return <div className={clsx(styles.rect, className)}></div>
}
