import clsx from 'clsx'
import React from 'react'

import {useSkeleton} from '../skeleton-context.jsx'
import styles from './Card.module.css'

export default function CardTitle ({children}) {
  return <div>
    <h3>
      <span className={clsx(styles.icon, useSkeleton('dark'))}><span>?</span></span>
      <span className={useSkeleton('mid')}>{children}</span>
    </h3>
  </div>
}
