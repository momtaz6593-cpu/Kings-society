import React from 'react'
import Hero from './components/server/Hero'
import CategoryBar from './components/server/CategoryBar'
import NewSeason from './components/server/NewSeason'
import Everyday from './components/server/Everyday'
import ShopByStyle from './components/server/ShopByStyle'
import FeatureBar from './components/server/FeatureBar'
import Promobanner from './components/server/Promobanner'

const page = () => {
  return (
    <div>
      <Hero/>
      <CategoryBar/>
      <NewSeason/>
      <Everyday/>
      <ShopByStyle/>
      <FeatureBar/>
      <Promobanner/>
    </div>
  )
}

export default page