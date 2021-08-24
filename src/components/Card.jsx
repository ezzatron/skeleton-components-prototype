import clsx from 'clsx'
import React from 'react'

import {skeletonize} from '../skeleton.module.css'
import CardActions from './CardActions.jsx'
import CardBody from './CardBody.jsx'
import CardTitle from './CardTitle.jsx'
import styles from './Card.module.css'

export default function Card ({actions, children, skeleton, title}) {
  const className = clsx(styles.card, {
    [skeletonize]: skeleton,
  })

  return <div className={className}>
    <CardTitle>{title}</CardTitle>
    <CardBody>{children}</CardBody>
    <CardActions actions={actions} />
  </div>
}
