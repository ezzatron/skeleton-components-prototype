import React from 'react'

import skeleton from '../skeleton.module.css'
import Card from './Card.jsx'
import CardList from './CardList.jsx'
import CustomSkeletonCard from './CustomSkeletonCard.jsx'

export default function RealFakeCardList () {
  return <CardList>
    <Card title='Example card A' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card B' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Cupidatat ad est non qui cupidatat velit ut elit officia elit veniam duis exercitation in.</p>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card A' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card B' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Cupidatat ad est non qui cupidatat velit ut elit officia elit veniam duis exercitation in.</p>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card A' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card B' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Cupidatat ad est non qui cupidatat velit ut elit officia elit veniam duis exercitation in.</p>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card A' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card B' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Cupidatat ad est non qui cupidatat velit ut elit officia elit veniam duis exercitation in.</p>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card A' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>

    <Card title='Example card B' actions={['One', 'Two', 'Loooooooooong']}>
      <p className={skeleton.light}>Cupidatat ad est non qui cupidatat velit ut elit officia elit veniam duis exercitation in.</p>
      <p className={skeleton.light}>Lorem ipsum quis ex nulla elit reprehenderit consequat irure laborum ut dolor voluptate irure velit ex qui irure dolor nulla eu dolore ullamco amet in excepteur ex dolore laborum elit enim dolore magna culpa ullamco qui id ut cillum exercitation reprehenderit.</p>
    </Card>
  </CardList>
}
