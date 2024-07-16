import { Companies, FAQ, Hero, Newsletter, Services } from './components/sections'

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Services />
      <FAQ />
      <Newsletter />
    </div>
  )
}

export default Home