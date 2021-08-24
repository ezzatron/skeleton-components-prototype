import React, {createContext, useContext} from 'react'

import styles from './skeleton.module.css'

const Context = createContext(false)

export function Skeleton ({children}) {
  return <Context.Provider value={true}>
    {children}
  </Context.Provider>
}

export function useSkeleton (variant) {
  const isSkeleton = useContext(Context)

  return isSkeleton ? styles[variant] : ''
}
