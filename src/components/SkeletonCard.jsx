import React from 'react'

import {light} from '../skeleton.module.css'
import Card from './Card.jsx'

export default function SkeletonCard ({skeleton}) {
  return <Card skeleton={skeleton} title='Example card' actions={['One', 'Two', 'Loooooooooong']}>
    <p className={light}>
      Cupidatat ad est non qui cupidatat velit ut elit officia elit veniam
      duis exercitation in.
    </p>

    <p className={light}>
      Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut
      dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco
      amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco
      qui id ut cillum exercitation reprehenderit.
    </p>
  </Card>
}
