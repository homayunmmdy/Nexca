import React from 'react'
import MainNews from './components/sections/MainNews'
import MostTabs from './components/sections/MostTabs'
import ListAds from './components/ads/ListAds'

const Home = () => {
  return (
    <div className='px-6 sm:px-12'>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
            <MainNews />
        </div>
        <div className="col-span-12 md:col-span-3">
            <MostTabs />
        </div>
        <div className="col-span-12 md:col-span-3">
          <ListAds />
        </div>
      </div>
    </div>
  )
}

export default Home