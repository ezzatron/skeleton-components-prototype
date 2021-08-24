import React, {createContext, useContext} from 'react'

import {skeletonize} from './skeleton.module.css'

const Context = createContext(false)

export function Skeleton ({children}) {
  return <Context.Provider value={true}>
    {children}
  </Context.Provider>
}

export function useSkeleton () {
  const isSkeleton = useContext(Context)

  return isSkeleton ? skeletonize : ''
}
