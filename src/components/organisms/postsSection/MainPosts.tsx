import React from 'react'
import MainSec from './MainSec'
import NextMain from './NextMain'

const MainPosts = () => {
  return (
    <div className="grid grid-cols-12 md:gap-9">
          <MainSec />
          <NextMain />
        </div>
  )
}

export default MainPosts