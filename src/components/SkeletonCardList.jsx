import React from 'react'

import skeleton from '../skeleton.module.css'
import CardList from './CardList.jsx'
import SkeletonCard from './SkeletonCard.jsx'

export default function SkeletonCardList () {
  return <CardList skeleton>
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
  </CardList>
}
