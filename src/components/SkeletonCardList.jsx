import React from 'react'

import CardList from './CardList.jsx'
import SkeletonCard from './SkeletonCard.jsx'

export default function SkeletonCardList () {
  return <CardList>
    <SkeletonCard skeleton />
    <SkeletonCard />
    <SkeletonCard skeleton />
    <SkeletonCard />
    <SkeletonCard skeleton />
    <SkeletonCard />
    <SkeletonCard skeleton />
    <SkeletonCard />
    <SkeletonCard skeleton />
    <SkeletonCard />
  </CardList>
}
