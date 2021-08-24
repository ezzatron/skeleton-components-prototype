import React from 'react'

import CardActions from './CardActions.jsx'
import CardBody from './CardBody.jsx'
import CardTitle from './CardTitle.jsx'
import styles from './Card.module.css'

export default function Card ({actions, children, title}) {
  return <div className={styles.card}>
    <CardTitle>{title}</CardTitle>
    <CardBody>{children}</CardBody>
    <CardActions actions={actions} />
  </div>
}
