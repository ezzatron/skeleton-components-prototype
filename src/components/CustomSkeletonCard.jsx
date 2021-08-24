import React from 'react'

import styles from './CustomSkeletonCard.module.css'
import SkeletonRect from './SkeletonRect.jsx'

export default function CustomSkeletonCard () {
  return <div className={styles.card}>
    <SkeletonRect className={styles.title} />
  </div>
}
