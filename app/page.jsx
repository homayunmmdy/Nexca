import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import { Companies, FAQ } from './components/sections'

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Services />
      <FAQ />
    </div>
  )
}

export default Home