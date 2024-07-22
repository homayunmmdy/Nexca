import React from 'react'
import { MainSec, PostsSec } from './components'

const DemoPage = () => {
    return (
        <>
            <div className='w-[94%] md:w-[92%] mx-auto pt-12'>
                <MainSec />
                <PostsSec />
            </div>
        </>
    )
}

export default DemoPage