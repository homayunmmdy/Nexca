import { Companies, FAQ, Hero, Newsletter, Services } from './components/sections'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Companies />
      <FAQ />
      <Newsletter />
    </div>
  )
}

export default Home