import React, {useEffect, useState} from 'react'

import CustomSkeletonCard from './components/CustomSkeletonCard.jsx'
import RealFakeCardList from './components/RealFakeCardList.jsx'
import SkeletonCardList from './components/SkeletonCardList.jsx'

export default function App() {
  // return <CustomSkeletonCard />

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  return isLoaded ? <RealFakeCardList /> : <SkeletonCardList />
}
