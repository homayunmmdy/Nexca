import React from 'react'
import { MainSec, PostsSec, SubNavbar } from './components'

const DemoPage = () => {
    return (
        <>
            <SubNavbar />
            <div className='w-[94%] md:w-[92%] mx-auto pt-12'>
                <MainSec />
                <PostsSec />
            </div>
        </>
    )
}

export default DemoPage