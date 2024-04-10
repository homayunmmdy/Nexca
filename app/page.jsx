import React from 'react'
import MainNews from './components/sections/MainNews'
import MostTabs from './components/sections/MostTabs'
import ListAds from './components/ads/ListAds'
import VerticalNews from './components/sections/VerticalNews'
import UnderVertical from './components/sections/UnderVertical'
import HorizontalNews from './components/sections/HorizontalNews'
import LinearNews from './components/sections/LinearNews'

const Home = () => {
  return (
    <div className='px-6 sm:px-12'>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <MainNews />
          <HorizontalNews secid="6" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <MostTabs />
        </div>
        <div className="col-span-12 md:col-span-3">
          <ListAds />
          <VerticalNews secid="4" />
          <UnderVertical secid="5" />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6 px-3">
        <VerticalNews secid="7" />
      </div>
      <div className="grid grid-cols-12 gap-4 my-5">
        <div className="col-span-12 md:col-span-4">
          <VerticalNews secid="8" />
          <UnderVertical secid="9" />
        </div>
        <div className="col-span-12 md:col-span-4">
          <VerticalNews secid="10" />
          <UnderVertical secid="11" />
        </div>
        <div className="col-span-12 md:col-span-4">
          <LinearNews secid="12" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <VerticalNews secid="13" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <HorizontalNews secid="14" />
        </div>
        <div className="col-span-12 md:col-span-8">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <VerticalNews secid="15" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <HorizontalNews secid="16" />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <VerticalNews secid="17" />
      </div>
    </div>
  )
}

export default Home