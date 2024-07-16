import { Companies, FAQ, Hero, Services } from './components/sections'

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