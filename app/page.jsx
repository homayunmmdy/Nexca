import React from 'react'

const Home = () => {
  return (
    <div className='px-6 sm:px-12'>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <div className='h-full w-ful bg-orange-700'>one</div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className='h-full w-ful bg-lime-600'>two</div>

        </div>
        <div className="col-span-12 md:col-span-3">
          <div className='h-full w-ful bg-teal-400'>three</div>
        </div>
      </div>
    </div>
  )
}

export default Home