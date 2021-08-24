import React, {createContext, useContext} from 'react'

import styles from './skeleton.module.css'

const Context = createContext(false)

export function Skeleton ({children}) {
  return <Context.Provider value={true}>
    {children}
  </Context.Provider>
}

export function useDarkSkeleton () {
  const isSkeleton = useContext(Context)

  return isSkeleton ? styles.dark : ''
}

export function useLightSkeleton () {
  const isSkeleton = useContext(Context)

  return isSkeleton ? styles.light : ''
}

export function useSkeleton () {
  const isSkeleton = useContext(Context)

  return isSkeleton ? styles.mid : ''
}
