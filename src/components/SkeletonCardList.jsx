import React from 'react'

import {Skeleton} from '../skeleton-context.jsx'
import CardList from './CardList.jsx'
import SkeletonCard from './SkeletonCard.jsx'

export default function SkeletonCardList () {
  return <CardList>
    <Skeleton><SkeletonCard /></Skeleton>
    <SkeletonCard />
    <Skeleton><SkeletonCard /></Skeleton>
    <SkeletonCard />
    <Skeleton><SkeletonCard /></Skeleton>
    <SkeletonCard />
    <Skeleton><SkeletonCard /></Skeleton>
    <SkeletonCard />
    <Skeleton><SkeletonCard /></Skeleton>
    <SkeletonCard />
  </CardList>
}
