import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import React from 'react'

const Dependencies = () => {
    return (
        <>
            <ReactQueryDevtools />
            <Analytics />
        </>
    )
}

export default Dependencies