import React from 'react'
import MainNews from './components/sections/MainNews'
import MostTabs from './components/sections/MostTabs'
import ListAds from './components/ads/ListAds'
import VerticalNews from './components/sections/VerticalNews'
import UnderVertical from './components/sections/UnderVertical'
import HorizontalNews from './components/sections/HorizontalNews'

const Home = () => {
  return (
    <div className='px-6 sm:px-12'>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <MainNews />
          <HorizontalNews />
        </div>
        <div className="col-span-12 md:col-span-3">
          <MostTabs />
        </div>
        <div className="col-span-12 md:col-span-3">
          <ListAds />
          <VerticalNews />
          <UnderVertical />
        </div>
      </div>
    </div>
  )
}

export default Home