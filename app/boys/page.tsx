import React from 'react'
import BoyHero from '../components/server/BoyHero'
import BoyShopByC from '../components/server/BoyShopByC'
import BoyTrendingShirts from '../components/server/BoyTrendingShirts'
import BoyDiscountBanner from '../components/server/BoyDiscountBanner'
import FeatureBar from '../components/server/FeatureBar'
import BoyTrendingPants from '../components/server/BoyTrendingPants'
import BoyTrendingAccessories from '../components/server/BoyTrendingAccessories'

const page = () => {
  return (
    <div>
      <BoyHero/>
      <BoyShopByC/>
      <BoyTrendingShirts/>
      <BoyDiscountBanner/>
      <BoyTrendingPants/>
      <BoyTrendingAccessories/> 
      <FeatureBar/>
    </div>
  )
}

export default page