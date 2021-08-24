import clsx from 'clsx'
import React from 'react'

import skeleton from '../skeleton.module.css'
import styles from './Card.module.css'

export default function CardTitle ({children}) {
  return <div>
    <h3>
      <span className={clsx(styles.icon, skeleton.dark)}><span>?</span></span>
      <span className={skeleton.mid}>{children}</span>
    </h3>
  </div>
}
